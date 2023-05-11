import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container';
import Employee from "./employee";

export default function EmployeeList( { employees } ) {

    console.log(employees)

    return (
        <Container sx={{ py: 8 }} maxWidth="md">
          <Grid container spacing={4}>
            {employees.map((employee) => (
              <Grid item key={employee.id} xs={12} sm={6} md={4}>
                <Employee dataEmployee={employee}/>
              </Grid>
            ))}
          </Grid>
        </Container>
    )
}