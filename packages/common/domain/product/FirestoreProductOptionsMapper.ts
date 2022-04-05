import {ProductOptionsDto} from "./ProductOptionDto"
import {ProductOptions} from "./ProductOption"

const firestoreProductOptionsMapper = (data: ProductOptionsDto[]): ProductOptions[] => {
  return data.map(productOption => ({
    name: productOption.name,
    required: productOption.required,
    singleSelection: productOption.single_selection,
    options: productOption.options
  }))
}

export default firestoreProductOptionsMapper