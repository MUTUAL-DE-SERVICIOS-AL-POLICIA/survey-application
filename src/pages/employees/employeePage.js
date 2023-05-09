import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import EmployeeList from '../../components/employee/employeeList';
import { useEffect } from 'react';
import useEmployee from '../../hooks/useEmployee';


const theme = createTheme();

export default function EmployeePage() {

  const {getEmployees, setEmployees} = useEmployee()

  console.log(getEmployees())
  // useEffect( () => {
  //   getEmployees().then((object) => {console.log(object)})
  // }, [])

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
        <EmployeeList/>
      </main>
    </ThemeProvider>
  );
}