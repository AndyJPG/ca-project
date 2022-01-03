import {Box, Typography} from "@mui/material";

export const PostHeader = () => {
    return (
        <Box sx={{
            padding: "24px 0"
        }}>
            <Typography variant="h5" fontWeight="500">51/235 Flemington Road</Typography>
            <Typography>stars 4.83 | 128 reviews</Typography>
            <Typography>Franklin, Canberra, Australia</Typography>
        </Box>
    )
}
