import { AppBar, Toolbar, Typography } from "@mui/material";
import { useLocation } from "wouter";
import  useUser  from '../../hooks/useUser'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { IconButton, Tooltip } from '@mui/material';
import { ExitToApp } from "@mui/icons-material";
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import { useEffect, useState } from "react";
import SimCardDownloadOutlinedIcon from '@mui/icons-material/SimCardDownloadOutlined';


export default function Header() {

    const { signOut } = useUser()
    const [, navigation] = useLocation()
    const [isFullScreen, setIsFullScreen] = useState(false)

    function logout() {
        signOut()
        navigation('/')
    }

    useEffect(() => {
        document.addEventListener('fullscreenchange', handleFullScreenChange)

        return () => {
            document.removeEventListener("fullscreenchaneg", handleFullScreenChange)
        }
    }, [])

    const handleFullScreenChange = () => {
        setIsFullScreen(!!document.fullscreenElement)
    }

    const fullScreen = () => {
        if (!document.fullscreenElement) {
            if(document.documentElement.requestFullscreen) {
                document.documentElement.requestFullscreen()
            } else if(document.webkitRequestFullscreen) {
                document.documentElement.webkitRequestFullscreen()
            } else if(document.msRequestFullscreen) {
                document.documentElement.msRequestFullscreen()
            }
        }
    }

    const downloadReport = () => {
        alert("se va a descargar el reporte")
    }

    const theme = createTheme({
        palette:{
            background: {
                // default: '#A1B68E'
                // default: '#419387'
                default: '#ffffff'
            },
            borderBotton: {
                default: '#7BE421'
            }
        },
    })

    return (
        <ThemeProvider theme={theme}>
        <AppBar
            position="static"
            color="default"
            sx={{ bgcolor: "background.default" }}
        >
            <Toolbar sx={{ flexWrap: 'wrap'}}>
                <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1}} >
                    <img src="/muserpol-logo2.png" alt="logo" height="50px" width="150px" style={{ marginTop: '6px' }}/>
                </Typography>
                <Tooltip title="Pantalla completa" arrow>
                    <IconButton onClick={fullScreen} color="primary" sx={{border:1, marginRight: 2}}>
                        <FullscreenIcon fontSize="medium" />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Descargar reporte" arrow>
                    <IconButton onClick={downloadReport} color="primary" sx={{border:1, marginRight: 2}}>
                        <SimCardDownloadOutlinedIcon fontSize="medium" />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Cerrar sesión" arrow>
                    <IconButton onClick={logout} color="primary" sx={{border:1}}>
                        <ExitToApp fontSize="medium"/>
                    </IconButton>
                </Tooltip>
            </Toolbar>
        </AppBar>
        </ThemeProvider>
    )
}