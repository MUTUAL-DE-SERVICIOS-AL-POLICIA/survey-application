import { AppBar, Toolbar, Typography } from "@mui/material";
import { useLocation } from "wouter";
import  useUser  from '../../hooks/useUser'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { IconButton } from '@mui/material';
import { ExitToApp } from "@mui/icons-material";


export default function Header() {

    const { signOut } = useUser()
    const [, navigation] = useLocation()

    function logout() {
        signOut()
        navigation('/')
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
                <IconButton onClick={logout} color="primary" sx={{border:1}}>
                    <ExitToApp fontSize="medium"/>
                </IconButton>
            </Toolbar>
        </AppBar>
        </ThemeProvider>
    )
}