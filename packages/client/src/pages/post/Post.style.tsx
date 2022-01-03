import {CustomContainer} from "../../utils/muiStyleComponents"
import {Divider, Typography} from "@mui/material"
import {SearchBar, Review, PostHeader} from "../../components"

const PostStyle = () => {
    return (
        <CustomContainer>
            <PostHeader/>
            <Divider/>
            <SearchBar/>
            <Review/>
        </CustomContainer>
    )
}

export default PostStyle
