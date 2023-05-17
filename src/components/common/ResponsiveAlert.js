import  React, { useContext } from 'react'
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import ContextDialog from '../../context/activeDialogContext'
import { Box } from '@mui/material';


export default function ResponsiveDialog() {

    const [open, setOpen] = useContext(ContextDialog)

    const theme = useTheme()
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    const handleClose = () => {
        setOpen(false)
    }

    setTimeout(() => {
        setOpen(false)
    }, 4000)

    return (
        <div>
            <Dialog
                fullScreen={fullScreen}
                open={open}
                onClose={handleClose}
                aria-labelledby="Gracias por su respuesta"
            >
                <Box textAlign="center">
                    <img src="/check-mark-verified.gif" alt="GIF" style={{ width: '25%', height:'25%', objectFit:'cover', marginTop: 20}}/>
                    <DialogTitle id="responsive">
                        ¡Gracias por ayudarnos a brindarle un mejor servicio!
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText sx={{textAlign: 'center'}}>
                            MUSERPOL al servicio de la familia policial
                        </DialogContentText>
                    </DialogContent>
                </Box>
            </Dialog>
        </div>
    )

}