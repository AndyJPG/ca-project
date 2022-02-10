import Category from "./Category"

export const graphqlCategoryMapper = (data: any): Category => {
  return {
    id: data.id,
    name: data.attributes.name,
    tenantId: data.attributes.tenant.data.id
  }
}
