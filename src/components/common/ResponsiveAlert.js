import  React, { useContext } from 'react'
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { DialogActions } from '@mui/material';
import Button from '@mui/material/Button';
import ContextDialog from '../../context/activeDialogContext'


export default function ResponsiveDialog() {

    const [open, setOpen] = useContext(ContextDialog)

    const theme = useTheme()
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    const handleClose = () => {
        setOpen(false)
    }

    return (
        <div>
            <Dialog
                fullScreen={fullScreen}
                open={open}
                onClose={handleClose}
                aria-labelledby="Gracias por su respuesta"
            >
                <DialogTitle id="responsive">
                    ¡Gracias por ayudarnos a brindarle un mejor servicio!
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        MUSERPOL al servicio de la familia policial
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClose}>
                        Cerrar
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )

}