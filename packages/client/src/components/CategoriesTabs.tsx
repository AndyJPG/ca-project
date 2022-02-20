import {Tab, Tabs} from "@mui/material"
import * as React from "react"
import {CategoryWithProductDto} from "@ca/common/domain/category/CategoryDto"

interface CategoriesTabsProps {
  categoriesWithProduct: CategoryWithProductDto[]
}

export const CategoriesTabs = (props: CategoriesTabsProps) => {
  const {categoriesWithProduct} = props
  const [value, setValue] = React.useState(0)

  const handleChange = (e: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  const handleOnClick = (categoryId: string) => {
    const categoryEl = document.querySelector(categoryId) as HTMLElement
    if (categoryEl) {
      window.scrollTo({
        top: categoryEl.offsetTop - 60,
        behavior: "smooth"
      })
    }
  }

  return (
    <Tabs value={value} onChange={handleChange} variant="scrollable" scrollButtons="auto">
      {categoriesWithProduct.map(category => category.products.length > 0 &&
          <Tab key={category.name} label={category.name}
               onClick={() => handleOnClick(`#${category.name}`)}/>)}
    </Tabs>
  )
}
