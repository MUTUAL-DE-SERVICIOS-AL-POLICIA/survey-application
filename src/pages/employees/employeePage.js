import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import EmployeeList from '../../components/employee/employeeList';
import { useContext, useEffect, useState } from 'react';
import { getEmployees } from '../../services/employee/employee'
import Header from '../../components/common/Header';
import ContextLogin from '../../context/userContext'
import { useLocation } from 'wouter'
import { Breadcrumbs, Card } from '@mui/material';
import HomeIcon  from '@mui/icons-material/Home'

const theme = createTheme({
  palette: {
    background: {
      // default: '#F6FCF0'
      // default: '#419387'
      // default: '#D9E9E8'
      default: '#D9E9E8'
    }
  }
});

export default function EmployeePage() {

  const [listEmployees, setListEmployees] = useState([])
  const {token, setToken} = useContext(ContextLogin)
  const [, setLocation] = useLocation('')

    // useEffect(() => {
    //   getEmployees(token)
    //     .then(employees => {
    //       if(employees.ok) {
    //         setListEmployees(employees.data)
    //       } else {
    //         if(employees.status == 401) {
    //           setToken(null)
    //           setLocation('/')
    //         }
    //       }
    //     })
    // }, [])


  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <main>
        <Box
          sx={{
            bgcolor: 'background.default',
            pt: 3,
            pb: 3,
          }}
        >
          <div style={{display: 'flex'}}>
            <Card sx={{boxShadow: 0}}>
              <Breadcrumbs aria-label="breadcrumb" sx={{marginRight: 2}}>
                  <HomeIcon sx={{ ml: 1.5 }} fontSize="medium" />
                  <Typography color="text.primary">
                    Empleados
                  </Typography>
              </Breadcrumbs>
            </Card>
          </div>
        </Box>
        {/* <EmployeeList employees={listEmployees}/> */}
      </main>
    </ThemeProvider>
  );
}