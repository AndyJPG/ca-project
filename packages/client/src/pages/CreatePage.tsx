import data from "@ca/common/data/cbd_dumpling_house_data_feed.json"
import { ProductDto } from "@ca/common/domain/product/ProductDto"
import { useProductRepository } from "@ca/common/domain/product/ProductRepository"
import { Field, FieldArray, FieldHookConfig, Form, Formik, useField } from "formik"
import React from "react"

const MyField = (props: FieldHookConfig<string> & { label?: string }) => {
  const [ field ] = useField(props)
  return (
    <>
      <label htmlFor={field.name}>{props.label}</label>
      <Field {...field} {...props}/>
      <br/>
    </>
  )
}

const MyCheckbox = (props: FieldHookConfig<string> & { label?: string }) => {
  const [ field ] = useField({ ...props, type: "checkbox" })
  return (
    <label style={{ paddingRight: "4px" }}><Field type="checkbox" {...field}/>{props.label}</label>
  )
}

const CreatePage = () => {
  const { createProduct } = useProductRepository()
  const initialValues: ProductDto = {
    categories: [],
    description: "",
    image_url: "",
    ingredients: [],
    name: "",
    price: 0,
    product_options: [],
    tenant_id: "-N-fcTclENAgdE-Parxj",
    diet: []
  }

  const onSubmit = (values: ProductDto) => {
    createProduct(values)
    console.log(values)
  }

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ values }) => (
        <Form>
          <MyField label="name" name="name" type="text"/>
          <MyField label="description" name="description" type="text"/>
          <MyField label="image url" name="image_url" type="text"/>
          <MyField label="price" name="price" type="number"/>
          <br/>
          <div>categories</div>
          {data.categories.map(category => <MyCheckbox key={category.name} name="categories"
                                                       value={category.name} label={category.name}/>)}
          <br/>
          <br/>
          <div>diet</div>
          <MyCheckbox name="diet" value="V" label="V"/>
          <MyCheckbox name="diet" value="VG" label="VG"/>
          <MyCheckbox name="diet" value="GF" label="GF"/>
          <MyCheckbox name="diet" value="N" label="N"/>
          <br/>

          <FieldArray name="product_options" render={arrayHelpers => (
            <>
              {values.product_options.map((parentOption, index) => (
                <div key={index} style={{ border: "1px solid black" }}>
                  <MyField name={`product_options[${index}].name`} label="name"/>
                  <MyCheckbox name={`product_options[${index}].required`} label="required"/>
                  <MyCheckbox name={`product_options[${index}].singleSelection`} label="single selection"/>
                  <FieldArray name={`product_options[${index}].options`} render={optionsArrayHelpers => (
                    <>
                      {parentOption.options.map((option, index) => (
                        <div key={index} style={{ border: "1px solid blue" }}>
                          <Field name={`product_options[${index}].options[${index}].name`}/>
                          <Field name={`product_options[${index}].options[${index}].price`} type="number"/>
                        </div>
                      ))}
                      <button onClick={() => optionsArrayHelpers.push({
                        name: "",
                        price: 0
                      })}>+
                      </button>
                    </>
                  )}/>
                  <button onClick={() => arrayHelpers.remove(index)}>-</button>
                </div>
              ))}
              <button onClick={() => arrayHelpers.push({
                name: "",
                required: false,
                singleSelection: false,
                options: []
              })}>+
              </button>
            </>
          )}/>
          <br/>
          <button type="submit">submit</button>
          <pre>{JSON.stringify(values, null, 2)}</pre>
        </Form>
      )}
    </Formik>
  )
}

export default CreatePage