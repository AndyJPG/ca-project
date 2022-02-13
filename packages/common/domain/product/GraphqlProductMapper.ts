import Product from "./Product"

export const graphqlProductMapper = (data: any): Product => {
  const productAttributes = data.attributes
  return {
    id: data.id,
    tenantId: productAttributes.tenant.data.id,
    name: productAttributes.name,
    description: productAttributes.description || '',
    price: productAttributes.price,
    imageUrl: productAttributes.image.data ? productAttributes.image.data.attributes.url : null,
    categories: productAttributes.categories.data.map((category: any) => ({
      id: category.id,
      name: category.attributes.name,
      tenantId: category.attributes.tenant.data.id
    })),
    productOptions: productAttributes.product_options.data.map((productOptions: any) => ({
      name: productOptions.attributes.name,
      options: productOptions.attributes.options.map((productOption: any) => ({
        name: productOption.name,
        price: productOption.price
      }))
    }))
  }
}
