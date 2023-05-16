import { AppBar, Button, CssBaseline, Toolbar, Typography } from "@mui/material";
import { useLocation } from "wouter";
import  useUser  from '../../hooks/useUser'
import { useContext, useRef, useEffect, useState } from 'react'
import ContextReferencs from '../../context/fullScreenContext'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Icon from '@mui/material/Icon';

export default function Header({ qualificationRef, screen }) {

    const { signOut } = useUser()
    const [, navigation] = useLocation()
    const fullScrenReferens = useRef(null)
    const [referens, setReferens] = useContext(ContextReferencs)


    const [isFullScreen, setIsFullScreen] = useState(false);

    useEffect(() => {
        document.addEventListener("fullscreenchange", handleFullScreenChange);

        return () => {
            document.removeEventListener("fullscreenchange", handleFullScreenChange);
        };
    }, []);

    const handleFullScreenChange = () => {
        setIsFullScreen(!!document.fullscreenElement);
    };


    function logout() {
        signOut()
        navigation('/')
    }

    function fullScren() {
        // const container = document.getElementById('qualification')
        // const elem = referens.current
        // if(elem !== null) {
        //     if (elem.requestFullscreen) {
        //         elem.requestFullscreen();
        //     } else if(elem.webkitRequestFullscreen) {
        //         elem.webkitRequestFullscreen();
        //     } else if(elem.msRequestFullscreen) {
        //         elem.msRequestFullscreen();
        //     }
        // } else console.log("elem nulo")

        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
        }

    }

    const theme = createTheme({
        palette:{
            background: {
                default: '#A1B68E'
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
                <Button onClick={fullScren} variant="outlined" id="full-screen" ref={fullScrenReferens} sx={{borderColor: '#000000', color:'#000000'}}>
                    Pantalla completa
                </Button>
                <Button onClick={logout} variant="outlined" sx={{ my:1, mx: 1.5, borderColor: '#000000', color: '#000000'  }}>
                    Cerrar Sessión
                </Button>
            </Toolbar>
        </AppBar>
        </ThemeProvider>
    )
}