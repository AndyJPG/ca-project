import {Divider, List, ListItemButton, ListItemIcon, ListItemText, ListSubheader, Typography} from "@mui/material"
import Checkbox from "@mui/material/Checkbox"
import Radio from "@mui/material/Radio"
import * as React from "react"
import {useEffect, useState} from "react"
import * as Yup from "yup"
import {ProductOptions} from "@ca/common/domain/product/ProductOption"
import {Form, Formik} from "formik"

interface ProductOptionsListProps {
  productOptions: ProductOptions[]
}

interface InitialValues {
  [key: string]: string | string[]
}

interface ValidationSchema {
  [key: string]: Yup.StringSchema | Yup.ArraySchema<Yup.StringSchema>
}

export const ProductOptionsList = (props: ProductOptionsListProps) => {
  const {productOptions} = props
  const [initialValues, setInitialValues] = useState<InitialValues | null>(null)
  const [validationSchema, setValidationSchema] = useState<ValidationSchema | null>(null)

  useEffect(() => {
    if (!initialValues) {
      const values: InitialValues = {}
      const validation: ValidationSchema = {}
      for (const optionList of productOptions) {
        if (optionList.singleSelection) {
          values[optionList.name] = ""
          validation[optionList.name] = Yup.string().required(`${optionList.name} required`)
        } else {
          values[optionList.name] = []
        }
      }
      setInitialValues(values)
      setValidationSchema(validation)
    }
  }, [])

  if (!initialValues || !validationSchema) {
    return null
  }

  return (
    <Formik initialValues={initialValues} validationSchema={Yup.object(validationSchema)} onSubmit={() => {
    }}>
      {({values, handleChange, errors}) => (
        <Form>
          {productOptions.map(optionList => (
            <List key={optionList.name} subheader={
              <ListSubheader>
                {optionList.name.slice(0, 1).toUpperCase()}{optionList.name.slice(1)}
                {optionList.required && <Typography variant="body2" sx={{margin: "0.2rem 0 0 0"}}>Required</Typography>}
              </ListSubheader>
            }>
              {optionList.options.map((option, index) => (
                <React.Fragment key={option.name}>
                  {index !== 0 && <Divider variant="middle"/>}
                  <ListItemButton>
                    <ListItemText primary={`${option.name.slice(0, 1).toUpperCase()}${option.name.slice(1)}`}
                                  secondary={`+$${option.price}`}
                                  secondaryTypographyProps={{margin: "0 0 0 1rem"}}
                                  sx={{display: "flex", alignItems: "center"}}/>
                    <ListItemIcon sx={{minWidth: 0, "& .MuiButtonBase-root": {position: "inherit"}}}>
                      {optionList.singleSelection ?
                        <Radio name={optionList.name} value={index}
                               checked={values[optionList.name] === index.toString()}
                               onChange={handleChange} color="secondary"
                               sx={{padding: 0}} disableRipple/> :
                        <Checkbox name={optionList.name} value={index}
                                  onChange={handleChange} color="secondary"
                                  sx={{padding: 0}} disableRipple/>}
                    </ListItemIcon>
                  </ListItemButton>
                </React.Fragment>
              ))}
            </List>
          ))}
          <pre>{JSON.stringify(values)}</pre>
          <pre>{JSON.stringify(errors)}</pre>
        </Form>
      )}
    </Formik>
  )
}
