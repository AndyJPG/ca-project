import {Divider, List, ListItem, ListItemButton, ListItemText, ListSubheader, Typography} from "@mui/material"
import Checkbox from "@mui/material/Checkbox"
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
          <React.Fragment key={option.name}>
            {index !== 0 && <Divider variant="middle"/>}
            <ListItem sx={{padding: 0}}
                      secondaryAction={<Checkbox color="secondary" sx={{padding: 0}}/>}>
              <ListItemButton>
                <ListItemText primary={`${option.name.slice(0, 1).toUpperCase()}${option.name.slice(1)}`}
                              secondary={`+$${option.price}`}
                              secondaryTypographyProps={{margin: "0 0 0 1rem"}}
                              sx={{display: "flex", alignItems: "center"}}/>
              </ListItemButton>
            </ListItem>
          </React.Fragment>
        ))}
      </List>
    ))}
  </>
}
