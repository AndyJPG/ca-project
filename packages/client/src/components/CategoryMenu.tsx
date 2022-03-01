import {List, ListItem, ListItemButton, ListItemText} from "@mui/material"
import * as React from "react"
import {useLocalCategoryStateService} from "@ca/common/services/LocalCategoryStateServiceAdapter"
import {BaseContainer} from "../containers/BaseContainer"

export const CategoryMenu = () => {
  const {categories} = useLocalCategoryStateService()

  const handleOnClick = (categoryId: string) => {
    const categoryEl = document.querySelector(categoryId) as HTMLElement
    if (categoryEl) {
      window.scrollTo({
        top: categoryEl.offsetTop - 112,
        behavior: "smooth"
      })
    }
  }

  return (
    <BaseContainer sx={{
      width: "17.5rem",
      backgroundColor: "white"
    }}>
      <List>
        {categories && categories.map((category, index) => (
          <ListItem key={category.id + category.name}>
            <ListItemButton selected={index === 0} onClick={() => handleOnClick(`#${category.name}`)}>
              <ListItemText primary={category.name}/>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </BaseContainer>
  )
}
