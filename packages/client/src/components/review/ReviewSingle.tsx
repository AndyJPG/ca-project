import {Avatar, Card, CardContent, CardHeader, Typography} from "@mui/material";

export const ReviewSingle = () => {
    return (
        <Card sx={{
            paddingTop: '24px'
        }}>
            <CardHeader title="Lisa"
                        subheader="February 2019"
                        avatar={<Avatar sx={{bgcolor: 'primary.main'}}>A</Avatar>}
                        sx={{padding: '0'}}/>
            <CardContent sx={{padding: '0'}}>
                <Typography variant="body2" sx={{padding: '0'}}>
                    Good mountain view
                </Typography>
            </CardContent>
        </Card>
    )
}
