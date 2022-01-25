import CreateNewProduct from "../useCases/CreateNewProduct"
import {productRepository, tenantRepository} from "./database.service"

export const createNewProduct = new CreateNewProduct(productRepository, tenantRepository)
