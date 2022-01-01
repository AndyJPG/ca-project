import * as React from 'react'
import {Typography} from "@mui/material";
import {CustomContainer} from "../../utils/muiStyleComponents";

export const Footer = () => {
    return (
        <CustomContainer sx={{
            height: "15vh",
            paddingY: "10px"
        }}>
            <Typography sx={{
                fontSize: "14px"
            }}>&#169; 2021 HomeReview</Typography>
        </CustomContainer>
    )
}
