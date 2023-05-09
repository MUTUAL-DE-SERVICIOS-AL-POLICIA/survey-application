import { useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import Container from '@mui/material/Container'
import Card from '@mui/material/Card'
import Alert from '@mui/material/Alert'
import { Box, Button, CssBaseline, TextField, Typography } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { useLocation } from 'wouter'
import  useUser  from '../../hooks/useUser'


function LoginPage() {

    const [, setLocation] = useLocation('')

    const {signIn, isLogged} = useUser()

    const dataComponent = {
        username: '',
        password: ''
    }

    useEffect(() => {
        if(isLogged) setLocation('/employees')
    }, [isLogged, setLocation])

    const handleSubmit = (event) => {

        event.preventDefault()
        const data = new FormData(event.currentTarget)

        dataComponent.username = data.get('username')
        dataComponent.password = data.get('password')

        signIn(dataComponent)

        // if(isLogged) /* Esto no funciona */
        //     return( <Alert severity="success"> Inicio de sesión exitoso! </Alert> )
        // else return ( <Alert severity="error"> Credenciales inválidas! </Alert> )

    }

    const theme = createTheme()

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                    }}
                >
                    <Card sx={{
                        maxWidth: 400,
                        padding: 5,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                        }}
                    >
                        <Avatar alt="Muserpol" src="/muserpolIcon.png" sx={{ m: 1, width: 100, height: 100 }} />
                        <Typography component="h1" variant="h5">
                            Inicio de sesión
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
                                variant="contained"
                                sx={{ mt:3, mb:2 }}
                            >
                                Iniciar sesión
                            </Button>
                        </Box>
                    </Card>
                </Box>
            </Container>
        </ThemeProvider>
    )
}

export default LoginPage;