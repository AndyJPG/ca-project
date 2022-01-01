import * as React from 'react'
import {Box} from "@mui/material";
import {CustomContainer} from "../../utils/muiStyleComponents";

export const Hero: React.FC = (props) => {
    return (
        <CustomContainer sx={{
            minHeight: "85vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        }}>
            <Box>
                {props.children}
            </Box>
        </CustomContainer>
    )
}
