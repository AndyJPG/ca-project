import {Card, CardContent, Typography} from "@mui/material";

export const PostListItem = () => {
    return (
        <Card>
            <CardContent sx={{
                pr: "0",
                pl: "0"
            }}>
                <Typography variant="h6">
                    51/235 Flemington Road
                </Typography>
                <Typography color="text.secondary">Franklin, Canberra, Australia</Typography>
                <Typography variant="body2">4.8 • (321)</Typography>
            </CardContent>
        </Card>
    )
}
