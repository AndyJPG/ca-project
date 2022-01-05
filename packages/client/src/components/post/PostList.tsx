import {PostListItem} from "./PostListItem";
import {Pagination, Stack} from "@mui/material";

export const PostList = () => {
    return (
        <>
            <PostListItem/>
            <Stack spacing={2}>
                <Pagination count={4} sx={{
                    display: 'flex',
                    justifyContent: 'center'
                }}/>
            </Stack>
        </>
    )
}
