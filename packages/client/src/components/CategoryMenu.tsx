import {List, ListItem, ListItemButton, ListItemText} from "@mui/material"
import {BaseContainer} from "../containers/BaseContainer"
import React, {useState} from "react"
import {useRxjsContext} from "../context"
import {useLocalCategoryService} from "@ca/common/services/LocalCategoryService"

const CategoryMenu = () => {
  const {categories} = useLocalCategoryService()
  const {openSidePanel} = useRxjsContext()
  const [selectedIndex, setSelectedIndex] = useState(0)

  const handleOnClick = (categoryId: string, index: number) => {
    const categoryEl = document.querySelector(categoryId) as HTMLElement
    if (categoryEl) {
      window.scrollTo({
        top: categoryEl.offsetTop - 112,
        behavior: "smooth"
      })
    }
    setSelectedIndex(index)
    openSidePanel({open: false})
  }

  return (
    <BaseContainer sx={{
      width: "17.5rem",
      backgroundColor: "white"
    }}>
      <List disablePadding>
        {categories && categories.map((category, index) => (
          <ListItem key={category.id + category.name} disablePadding>
            <ListItemButton selected={index === selectedIndex}
                            onClick={() => handleOnClick(`#${category.name}`, index)}>
              <ListItemText primary={category.name.slice(0, 1).toUpperCase() + category.name.slice(1)}/>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </BaseContainer>
  )
}

export default CategoryMenu
