import Product from './Product'
import {ProductDaoInterface} from "./ProductDao.interface";

export default class FakeProductDao implements ProductDaoInterface {
    async getProductsByTenantId(tenantId: string): Promise<Product[]> {
        return new Promise(resolve => {
            const product = new Product('p_001', 'apple', 'this is apple', 10, 't_001')
            return resolve([product])
        })
    }
}
