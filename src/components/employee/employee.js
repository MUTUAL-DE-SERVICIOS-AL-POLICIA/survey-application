import { Button, Card, CardContent, CardMedia, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material"
import { CardActionArea } from '@mui/material';
import { useLocation } from 'wouter';
import Typography from '@mui/material/Typography';
import { useRef, useState } from "react";


export default function Employee({ dataEmployee, styles }) {

    const [open, setOpen] = useState(false)

    const { height, display, flexDirection} = styles

    const [, navigate] = useLocation()

    const handleClick = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const handleSelected = (id) => {
        setOpen(false)
        navigate(`/qualification/${id}`)
    }

    return (
        <Card sx={{ height: {height}, display: {display}, flexDirection: {flexDirection}, boxShadow:10 }} >
            <CardActionArea onClick={() => handleClick(true)} >
                <CardMedia
                    component="img"
                    height="160"
                    image={dataEmployee.picture}
                    alt="random"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="div">
                        {`${dataEmployee.first_name} ${dataEmployee.last_name} ${dataEmployee.second_last_name}`}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {`${dataEmployee.identity_card}`}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {dataEmployee.active ? 'Activo' : 'Inactivo'}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    Seleccionar empleado
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        ¿Está seguro de seleccionar al empleado?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancelar</Button>
                    <Button onClick={() => handleSelected(dataEmployee.id)}>Aceptar</Button>
                </DialogActions>
            </Dialog>
        </Card>
    )
}