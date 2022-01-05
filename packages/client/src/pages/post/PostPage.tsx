import {PostHeader, Reviews} from "../../components";
import {Divider} from "@mui/material";
import {CustomContainer} from "../../utils/muiStyleComponents";

export const PostPage = () => {
    return (
        <CustomContainer>
            <PostHeader/>
            <Divider/>
            <Reviews/>
        </CustomContainer>
    )
}
