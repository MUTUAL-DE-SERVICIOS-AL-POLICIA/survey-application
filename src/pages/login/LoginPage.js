import { useEffect, useState, useContext } from "react";
import Avatar from "@mui/material/Avatar";
import Container from '@mui/material/Container'
import Card from '@mui/material/Card'
import { Box, Button, CssBaseline, TextField, Typography } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { useLocation } from 'wouter'
import useUser from '../../hooks/useUser'
import Alert from '@mui/material/Alert'


function LoginPage() {

    const [, setLocation] = useLocation('')

    const { signIn, isLogged } = useUser()

    const [isFullScreen, setIsFullScreen] = useState(false)

    const [showAlert, setShowAlert] = useState(false)

    const dataComponent = {
        username: '',
        password: ''
    }

    useEffect(() => {
        if (isLogged) {
            setLocation('/employees')
        }
    }, [isLogged])

    useEffect(() => {
        document.addEventListener('fullscreenchange', handleFullScreenChange)

        return () => {
            document.removeEventListener("fullscreenchaneg", handleFullScreenChange)
        }
    }, [])

    const handleFullScreenChange = () => {
        setIsFullScreen(!!document.fullscreenElement)
    }


    const handleSubmit = async (event) => {
        event.preventDefault()
        const data = new FormData(event.currentTarget)
        dataComponent.username = data.get('username')
        dataComponent.password = data.get('password')
        const success = await signIn(dataComponent)
        if (success) {
            if (!document.fullscreenElement) {
                if (document.documentElement.requestFullscreen) {
                    document.documentElement.requestFullscreen()
                } else if (document.webkitRequestFullscreen) {
                    document.documentElement.webkitRequestFullscreen()
                } else if (document.msRequestFullscreen) {
                    document.documentElement.msRequestFullscreen()
                }
            }
        } else {
            setShowAlert(true)
            setTimeout(() => {
                setShowAlert(false)
            }, 4000)
        }
    }

    const theme = createTheme()

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs" >
                <CssBaseline />
                <Box sx={{ marginTop: 8, }} >
                    <Card sx={{
                        maxWidth: 400,
                        padding: 5,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        backgroundColor: '#D9E9E8'
                    }}
                    >
                        <Avatar alt="Muserpol" src="/muserpolIcon.png" sx={{ m: 1, width: 100, height: 100 }} />
                        <Typography component="h1" variant="h5" align="center">
                            Calificación de Servicio
                        </Typography>
                        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="username"
                                label="Usuario"
                                name="username"
                                autoComplete="username"
                                autoFocus
                                color="primary"
                            ></TextField>
                            <TextField
                                marign="normal"
                                required
                                fullWidth
                                name="password"
                                label="Contraseña"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            ></TextField>
                            <Button
                                type="submit"
                                fullWidth
                                variant="outlined"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                INGRESAR
                            </Button>
                        </Box>
                    </Card>
                </Box>
                {showAlert && (<Alert severity="error" > Credenciales inválidas </Alert>)}
            </Container>
        </ThemeProvider>
    )
}

export default LoginPage;