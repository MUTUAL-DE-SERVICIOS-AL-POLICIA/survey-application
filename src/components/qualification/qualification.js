import React, { useContext, useState, useEffect, forwardRef } from 'react'
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid'
import { Box, CardActionArea, CardHeader, CardMedia } from '@mui/material';
import { Card, CardContent } from "@mui/material"
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ContextLogin from '../../context/userContext'
import { getQuestionStructure, sendEvaluation } from '../../services/qualification/qualificationService';
import ContextDialog from '../../context/activeDialogContext'
import { getEmployees } from '../../services/employee/employee';
import { useLocation } from 'wouter';
import Swal from 'sweetalert2'


const theme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#DAEFC8', // color de fondo predeterminado
    },
    text: {
      primary: '#000000', // color de texto predeterminado
    },
    green: {
      '700': '#419387',
      '400': '#F0F8F8'
    },
  },
});


const dialog = () => {
  return <div>{
    Swal.fire({
      toast: false,
      title: '¡GRACIAS!',
      icon: 'success',
      showConfirmButton: false,
      timer: 7000,
      timerProgressBar: true,
      allowOutsideClick: false,
      width: '25em',
      backdrop: `
      rgba(0,0,0,0.4)
      center center
      no-repeat
      `,
    })
  }
  </div>
}

const Qualification = forwardRef((props, ref) => {

  const [open, setOpen] = useContext(ContextDialog)
  const [employee, setEmployee] = useState(null)
  const [, setLocation] = useLocation('')

  const { idEmployee } = props

  /* Obtenemos las preguntas con su  posibles respuestas */
  const [listQuestions, setListQuestions] = useState([])
  const { token, setToken } = useContext(ContextLogin)

  useEffect(() => {
    getQuestionStructure(token)
      .then(questions => {
        if (questions.ok) {
          setListQuestions(questions.data) /* cuando pongo el data me da bucle infinito*/
        } else {
          if (questions.status == 401) {
            setToken(null)
            setLocation('/')
          }
        }
      })
    getEmployees(token).then(employees => {
      if (employees.ok) {
        setEmployee(employees.data.find(emp => emp.id == idEmployee))
      } else {
        if (employees.status == 401) {
          setToken(null)
          setLocation('/')
        }
      }
    })
  }, [])

  let form = listQuestions

  const { questions } = form


  async function handleAnswer(idQuestion, idAnswer) {

    let idSurvey = form.id
    const answer = {}
    answer.question_id = idQuestion
    answer.answer_option_id = idAnswer
    const answers = []
    answers.push(answer)
    let active = await sendEvaluation({ idEmployee, idSurvey, answers })
    dialog()
  }

  return (
    < ThemeProvider theme={theme} >
      <Box ref={ref} sx={{ paddingBottom: 5 }}>
        {
          questions !== undefined ? (
            questions.map((questions, index) => (
              <Box key={index}>
                <Container disableGutters maxWidth="md" component="main" sx={{ pt: 1, pb: 0 }} >
                  <Box sx={{ display: 'flex', paddingLeft: 3, paddingRight: 3, paddingTop: 2, marginBottom: 2 }}>
                    <Typography
                      component="h1"
                      variant="h2"
                      align="left"
                      gutterBottom
                      sx={{
                        paddingTop: 1,
                        paddingleft: 2,
                        fontWeight: 400,
                      }}
                    >
                      {questions.description}
                    </Typography>
                    <Card sx={{ height: '100%', width: '25%', marginLeft: 5, display: 'flex', flexDirection: 'column', boxShadow: 10 }}>
                      <CardMedia
                        component="img"
                        height="150"
                        image={employee.picture}
                        alt="imagen"
                      />
                    </Card>
                  </Box>
                </Container>
                <Container maxWidth="md" component="main" >
                  <Grid container spacing={5} alignItems="flex-end" >
                    {
                      questions.answers.map((answer, index) => (
                        <Grid
                          item
                          key={index}
                          xs={12}
                          sm={6}
                          md={4}
                        >
                          <CardActionArea onClick={() => handleAnswer(questions.id, answer.id)}>
                            <Card elevation={3}>
                              <CardHeader
                                title={<Typography variant="h4" component="div" align="center" style={{ color: "#ffffff" }}>{answer.description.toUpperCase()}</Typography>}
                                titleTypographyProps={{ align: 'center' }}
                                sx={{
                                  backgroundColor: (theme) => theme.palette.mode === 'light'
                                    ? theme.palette.green[700]
                                    : theme.palette.green[400]
                                }}
                              />
                              <CardContent>
                                <Box
                                  sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'baseline',
                                    mb: 0,
                                    height: 170
                                  }}
                                >
                                  <img src={answer.picture} alt="GIF" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                </Box>
                              </CardContent>
                            </Card>
                          </CardActionArea>
                        </Grid>
                      ))
                    }
                  </Grid>
                </Container>
              </Box>
            ))
          ) : (
            <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
              <Typography
                component="h1"
                variant="h2"
                align="center"
                color="text.primary"
                gutterBottom
                sx={{ fontWeight: 400 }}
              >
                Aún no hay preguntas
              </Typography>
            </Container>
          )
        }
      </Box>
    </ThemeProvider >
  );
}
)

export default Qualification