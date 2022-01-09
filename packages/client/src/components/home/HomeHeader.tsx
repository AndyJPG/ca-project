import {Box, Typography} from "@mui/material";

interface HomeHeaderProps {
    title: string
}

export const HomeHeader = (props: HomeHeaderProps) => {
    return (
        <Box sx={{
            padding: "24px 0"
        }}>
            <Typography variant="h5" fontWeight="500">{props.title}</Typography>
            <Typography>stars 4.83 | 128 reviews</Typography>
            <Typography>Franklin, Canberra, Australia</Typography>
        </Box>
    )
}
