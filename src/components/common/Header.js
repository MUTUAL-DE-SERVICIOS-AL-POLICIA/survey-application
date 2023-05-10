import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { useLocation } from "wouter";
import  useUser  from '../../hooks/useUser'

export default function Header() {

    const { signOut } = useUser()
    const [, navigation] = useLocation()

    function logout() {
        signOut()
        navigation('/')
    }

    function fullScren() {
        alert("Me hizo click, oigame!")
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
                <Button onClick={fullScren} variant="outlined" sx={{
                }}>
                    Pantalla completa
                </Button>
                <Button onClick={logout} variant="outlined" sx={{
                    my:1, mx: 1.5
                }}>
                    Cerrar Sessión
                </Button>
            </Toolbar>
        </AppBar>
    )
}