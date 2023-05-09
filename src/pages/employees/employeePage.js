import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import EmployeeList from '../../components/employee/employeeList';
import { useContext, useEffect } from 'react';
import useUser from '../../hooks/useUser'
import { useLocation } from 'wouter';
import Context from '../../context/userContext'
import employee from '../../services/employee/employee'



const theme = createTheme();
const apiURL = process.env.REACT_APP_BASE_URL_API

export default function EmployeePage() {

  const { isLogged } = useUser()
  const [, navigate] = useLocation()
  const { token } = useContext(Context)

  // if(!isLogged) return navigate('/')

  useEffect(() => {
    let tokenT = JSON.parse(token)
    let tokenAuth = tokenT
    // employee(tokenT).then((object) => {console.log(object)})
  }, [token, employee])

  const employees = [
    {
      id: 1,
      first_name: "leonel",
      second_name: "maximo",
      last_name: "vargas",
      second_last_name: "ramirez",
      identity_card: 9101918,
      active: true,
      area_id: 1,
      picture: 'hombre1.jpeg'
    },
    {
      id: 2,
      first_name: "Carmen",
      second_name: "Ana",
      last_name: "gomez",
      second_last_name: "bolañoz",
      identity_card: 871112,
      active: true,
      area_id: 1,
      picture: 'mujer2.jpeg'
    },
    {
      id: 3,
      first_name: "Julia",
      second_name: "Maria",
      last_name: "Laserna",
      second_last_name: "Paco",
      identity_card: 881177,
      active: true,
      area_id: 1,
      picture: 'mujer1.jpeg'
    }
  ]

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h2"
              variant="h3"
              align="center"
              color="text.primary"
              gutterBottom
            >
                Lista de empleados
            </Typography>
          </Container>
        </Box>
        <EmployeeList employees={employees}/>
      </main>
    </ThemeProvider>
  );
}