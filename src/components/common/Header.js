import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { useLocation } from "wouter";
import  useUser  from '../../hooks/useUser'
import { useContext, useRef, useEffect, useState } from 'react'
import ContextReferencs from '../../context/fullScreenContext'

export default function Header({ qualificationRef, screen }) {

    const { signOut } = useUser()
    const [, navigation] = useLocation()
    const fullScrenReferens = useRef(null)
    const [referens, setReferens] = useContext(ContextReferencs)


    const [isFullScreen, setIsFullScreen] = useState(false);

    useEffect(() => {
        document.addEventListener("fullscreenchange", handleFullScreenChange);

    // if(document.fullscreenElement === null) {
    //     console.log("se ha salido de pantalla completa")
    // }
    // if(isFullScreen) {
    //     console.log("esta modo pantalla completa")
    // } else {
    //     console.log("no es pantalla completa")
    // }

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

    // console.log(document.fullscreenElement)
    // if(document.fullscreenElement === null) {
    //     console.log("se ha salido de pantalla completa")
    // }


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

    return (
        <AppBar
            position="static"
            color="default"
            evelation={0}
            sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
        >
            <Toolbar sx={{ flexWrap: 'wrap'}}>
                <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1}} >
                    MUSERPOL
                </Typography>
                <Button onClick={fullScren} variant="outlined" id="full-screen" ref={fullScrenReferens} >
                    Pantalla completa
                </Button>
                <Button onClick={logout} variant="outlined" sx={{ my:1, mx: 1.5 }}>
                    Cerrar Sessión
                </Button>
            </Toolbar>
        </AppBar>
    )
}