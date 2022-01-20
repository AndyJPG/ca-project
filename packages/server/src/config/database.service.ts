import ProductRepository from "../domain/product/repository/ProductRepository"
import FakeProductDao from "../domain/product/dao/FakeProductDao"

const fakeProductDao = new FakeProductDao()
export const productRepository = new ProductRepository(fakeProductDao)
