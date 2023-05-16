import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container';
import Employee from "./employee";

export default function EmployeeList( { employees } ) {

    const styles = {
      height: '100%',
      display: 'flex',
      flexDirection: 'column'
    }

    return (
        <Container sx={{ py: 2 }} maxWidth="md">
          <Grid container spacing={4}>
            {employees.map((employee) => (
              <Grid item key={employee.id} xs={12} sm={6} md={4}>
                <Employee dataEmployee={employee} styles={styles}/>
              </Grid>
            ))}
          </Grid>
        </Container>
    )
}