import { CRUD } from "../../common/interfaces/crud.interface"

class ProductsService implements CRUD {
  create(resource: any): Promise<any> {
    return Promise.resolve(undefined)
  }

  deleteById(id: string): Promise<any> {
    return Promise.resolve(undefined)
  }

  list(limit: number, page: number): Promise<any> {
    return Promise.resolve(undefined)
  }

  patchById(id: string, resource: any): Promise<any> {
    return Promise.resolve(undefined)
  }

  putById(id: string, resource: any): Promise<any> {
    return Promise.resolve(undefined)
  }

  readById(id: string): Promise<any> {
    return Promise.resolve(undefined)
  }

}

export default new ProductsService()
