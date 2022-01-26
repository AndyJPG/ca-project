import ProductRepository from "../domain/product/repository/ProductRepository"
import TenantRepository from "../domain/tenant/TenantRepository"
import ProductDto from "../domain/product/dto/ProductDto"
import Product from "../domain/product/entity/Product"

class CreateNewProduct {
    _productRepository: ProductRepository
    _tenantRepository: TenantRepository

    constructor(
        productRepository: ProductRepository,
        tenantRepository: TenantRepository,
    ) {
        this._productRepository = productRepository
        this._tenantRepository = tenantRepository
    }

    async creatNewProduct(product: ProductDto): Promise<Product | null> {
        const {name, price, tenantId, description} = product
        if (!name || !price || !tenantId || !description) {
            throw new Error("Data to create product is incomplete!")
        }

        const tenant = await this._tenantRepository.getTenantById(tenantId)
        if (!tenant) {
            throw new Error(`Tenant ${tenantId} does not exist!`)
        }

        const newProduct = await this._productRepository.addProduct(product)
        if (!newProduct) {
            throw new Error('Unable to create product')
        }

        tenant.products.push(newProduct.id)

        await this._tenantRepository.updateTenant(tenant.id, tenant.toJSON())

        return newProduct
    }
}

export default CreateNewProduct
