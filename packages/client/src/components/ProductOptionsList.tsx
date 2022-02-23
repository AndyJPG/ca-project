import {List, ListItem, ListItemText, ListSubheader, Typography} from "@mui/material"
import * as React from "react"
import {ProductOptions} from "@ca/common/domain/product/ProductOption"

interface ProductOptionsListProps {
  productOptions: ProductOptions[]
}

export const ProductOptionsList = (props: ProductOptionsListProps) => {
  const {productOptions} = props
  return <>
    {productOptions.map(optionList => (
      <List sx={{mb: "1.2rem"}} key={optionList.name} subheader={
        <ListSubheader sx={{color: theme => theme.palette.primary.main}}>
          {optionList.name.slice(0, 1).toUpperCase()}{optionList.name.slice(1)}
        </ListSubheader>
      }>
        {optionList.options.map(option => (
          <ListItem key={option.name}>
            <ListItemText primary={`${option.name.slice(0, 1).toUpperCase()}${option.name.slice(1)}`}/>
            <Typography variant="body2">{`$ ${option.price}`}</Typography>
          </ListItem>
        ))}
      </List>
    ))}
  </>
}
