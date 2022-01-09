import {HomeListItem} from "./HomeListItem";
import {Pagination, Stack} from "@mui/material";
import {Home} from "@ca/common/domain";

interface HomeListProps {
    homes: Array<Home>
}

export const HomeList = (props: HomeListProps) => {
    return (
        <>
            {props.homes.map(home => <HomeListItem key={home.id} home={home}/>)}
            <Stack spacing={2}>
                <Pagination count={4} sx={{
                    display: 'flex',
                    justifyContent: 'center'
                }}/>
            </Stack>
        </>
    )
}
