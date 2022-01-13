import * as React from 'react'
import {Box} from "@mui/material";
import {CustomContainer} from "../utils/muiStyleComponents";

interface HeroProps {
    children: React.ReactNode
    heroImageUrl?: string
}

export const Hero = (props: HeroProps) => {
    return (
        <CustomContainer sx={{
            minHeight: "85vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundImage: `url(${props.heroImageUrl})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }}>
            <Box>
                {props.children}
            </Box>
        </CustomContainer>
    )
}
