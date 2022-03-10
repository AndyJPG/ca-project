import {Divider, List, ListItemButton, ListItemText, ListSubheader, Typography} from "@mui/material"
import * as React from "react"
import {ProductOptions} from "@ca/common/domain/product/ProductOption"

interface ProductOptionsListProps {
  productOptions: ProductOptions[]
}

export const ProductOptionsList = (props: ProductOptionsListProps) => {
  const {productOptions} = props
  return <>
    {productOptions.map(optionList => (
      <List key={optionList.name} subheader={
        <ListSubheader>
          {optionList.name.slice(0, 1).toUpperCase()}{optionList.name.slice(1)}
          <Typography variant="body2" sx={{margin: "0.2rem 0 0 0"}}>Required</Typography>
        </ListSubheader>
      }>
        {optionList.options.map((option, index) => (
          <>
            {index !== 0 && <Divider variant="middle"/>}
            <ListItemButton key={option.name}>
              <ListItemText primary={`${option.name.slice(0, 1).toUpperCase()}${option.name.slice(1)}`}/>
              <Typography variant="body2" sx={{margin: 0}}>{`+$${option.price}`}</Typography>
            </ListItemButton>

          </>
        ))}
      </List>
    ))}
  </>
}
