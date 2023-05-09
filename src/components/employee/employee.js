import { Card, CardContent, CardMedia } from "@mui/material"
import { CardActionArea } from '@mui/material';
import Typography from '@mui/material/Typography';

export default function Employee({ data }) {
    return (
        <Card
            sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
        >
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="160"
                    image="https://source.unsplash.com/random"
                    alt="random"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="div">
                        Juanito Pérez
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Sus datos personales del empleado irán aca
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}