import {Card, CardContent, Typography} from "@mui/material";
import {Home} from "@ca/common/domain";
import {Link} from "react-router-dom";

interface HomeListItemProps {
    home: Home
}

export const HomeListItem = (props: HomeListItemProps) => {
    return (
        <Card>
            <Link to={`/homes/${props.home.id}`}>To home</Link>
            <CardContent sx={{
                pr: "0",
                pl: "0"
            }}>
                <Typography variant="h6">
                    {props.home.address}
                </Typography>
                <Typography color="text.secondary">Franklin, Canberra, Australia</Typography>
                <Typography variant="body2">4.8 • (321)</Typography>
            </CardContent>
        </Card>
    )
}
