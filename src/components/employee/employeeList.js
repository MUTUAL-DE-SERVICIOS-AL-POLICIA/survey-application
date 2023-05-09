import { useEffect } from 'react';
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container';
import Employee from "./employee";

const cards = [1, 2, 3, 4, 5, 6]

export default function EmployeeList() {


  useEffect(() => {
    // Aquí debemos hacer la llamada a la api
    // o usar el context
  }, [])


    return (
        <Container sx={{ py: 8 }} maxWidth="md">
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Employee/>
              </Grid>
            ))}
          </Grid>
        </Container>
    )
}