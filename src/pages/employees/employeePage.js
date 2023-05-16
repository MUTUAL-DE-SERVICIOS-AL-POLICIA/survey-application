import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import EmployeeList from '../../components/employee/employeeList';
import { useContext, useEffect, useState } from 'react';
import { getEmployees } from '../../services/employee/employee'
import Header from '../../components/common/Header';
import Context from '../../context/employeeContext'
import ContextLogin from '../../context/userContext'
import { useLocation } from 'wouter'
import useUser from '../../hooks/useUser'

const theme = createTheme({
  palette: {
    background: {
      default: '#F6FCF0'
    }
  }
});

export default function EmployeePage() {

  const [listEmployees, setListEmployees] = useState([])
  const {token, setToken} = useContext(ContextLogin)
  const [, saveEmployees] = useContext(Context) /* revisarlo */
  const [, setLocation] = useLocation('')

    useEffect(() => {
      getEmployees(token)
        .then(employees => {
          if(employees.ok) {
            setListEmployees(employees.data)
            saveEmployees(employees.data) /* revisarlo */
          } else {
            if(employees.status == 401) {
              setToken(null)
              setLocation('/')
            }
          }
        })
    }, [])


  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <main>
        <Box
          sx={{
            bgcolor: 'background.default',
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
        <EmployeeList employees={listEmployees}/>
      </main>
    </ThemeProvider>
  );
}