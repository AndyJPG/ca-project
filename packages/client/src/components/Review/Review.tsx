import {Box} from "@mui/material";
import {ReviewSingle} from "../ReviewSingle/ReviewSingle";
import {SearchBar} from "../SearchBar/SearchBar";

export const Review = () => {
    return (
        <Box sx={{
            padding: "24px 0"
        }}>
            <SearchBar/>
            <ReviewSingle/>
        </Box>
    )
}
