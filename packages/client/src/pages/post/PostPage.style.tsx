import {CustomContainer} from "../../utils/muiStyleComponents"
import {Divider, Typography} from "@mui/material"
import {SearchBar, Review, PostHeader} from "../../components"

const PostPageStyle = () => {
    return (
        <CustomContainer>
            <PostHeader/>
            <Divider/>
            <Review/>
        </CustomContainer>
    )
}

export default PostPageStyle
