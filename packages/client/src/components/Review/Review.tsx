import {Box} from "@mui/material";
import {SingleReview} from "../SingleReview/SingleReview";
import {SearchBar} from "../SearchBar/SearchBar";

export const Review = () => {
    return (
        <Box sx={{
            padding: "24px 0"
        }}>
            <SearchBar/>
            <SingleReview/>
        </Box>
    )
}
