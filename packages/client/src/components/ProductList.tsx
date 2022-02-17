import {Typography} from "@mui/material"
import * as React from "react"
import Product from "@ca/common/domain/product/Product"
import {ProductListItem} from "./ProductListItem"
import {BaseContainer} from "../containers/BaseContainer"

interface ProductListProps {
  title?: string,
  products: Product[]
}

export const ProductList = (props: ProductListProps) => {
  const {title, products} = props

  return (
    <BaseContainer sx={{marginTop: '2rem'}}>
      {title &&
      <Typography variant="h5" sx={{paddingY: '0.5rem'}}>{title.slice(0, 1).toUpperCase()}{title.slice(1)}</Typography>}
      {products.map(product =>
        <ProductListItem key={product.id}
                         subtitle={product.name}
                         price={product.price}
                         description={product.description}
                         imageUrl={product.imageUrl || undefined}/>
      )}
    </BaseContainer>
  )
}
