import { Card, CardContent, CardMedia } from "@mui/material"
import { CardActionArea } from '@mui/material';
import { useLocation } from 'wouter';
import Typography from '@mui/material/Typography';

export default function Employee({ dataEmployee }) {

    // console.log(dataEmployee.id)

    const [, navigate] = useLocation()

    const handleClick = (id) => {
        console.log(id)
        navigate("/qualification")
    }

    return (
        <Card
            sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
        >
            <CardActionArea onClick={(event) => handleClick(dataEmployee.id) }>
                <CardMedia
                    component="img"
                    height="160"
                    image={dataEmployee.picture}
                    alt="random"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="div">
                        { `${dataEmployee.first_name} ${dataEmployee.last_name} ${dataEmployee.second_last_name}`}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {`${dataEmployee.identity_card}`}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {`${dataEmployee.active}`}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}