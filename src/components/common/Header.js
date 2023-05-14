import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { useLocation } from "wouter";
import  useUser  from '../../hooks/useUser'
import { useRef } from 'react'

export default function Header() {

    const { signOut } = useUser()
    const [, navigation] = useLocation()
    const fullScrenReferens = useRef(null)

    function logout() {
        signOut()
        navigation('/')
    }

    function fullScren() {
        // const idFullScreen = fullScrenReferens.current
        // alert(`${idFullScreen}`)

        const elem = document.getElementById('screen')

        if (elem.requestFullscreen) {
				elem.requestFullscreen();
			} else if(elem.webkitRequestFullscreen) {
				elem.webkitRequestFullscreen();
			} else if(elem.msRequestFullscreen) {
				elem.msRequestFullscreen();
			}

        // elem.style.width = window.innerWidth + 'px';
        // elem.style.height = window.innerHeight + 'px';

    }

    return (
        <AppBar
            position="static"
            color="default"
            evelation={0}
            sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
        >
            <Toolbar sx={{ flexWrap: 'wrap'}}>
                <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1}}>
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