import {Box} from "@mui/material";
import {ReviewSingle} from "./ReviewSingle";
import {SearchBar} from "../SearchBar";

export const Reviews = () => {
    return (
        <Box sx={{
            padding: "24px 0"
        }}>
            <SearchBar/>
            <ReviewSingle/>
        </Box>
    )
}
