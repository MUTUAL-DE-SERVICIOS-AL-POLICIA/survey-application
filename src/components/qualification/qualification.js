import React, { useContext, useState, useEffect, forwardRef } from 'react'
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid'
import { Box, CardActionArea, CardHeader } from '@mui/material';
import { Card, CardContent } from "@mui/material"
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useRef } from 'react'
import ContextLogin from '../../context/userContext'
import { getQuestionStructure, sendEvaluation } from '../../services/qualification/qualificationService';
import ResponsiveAlert from '../common/ResponsiveAlert'
import ContextDialog from '../../context/activeDialogContext'
// import COntextReferences from '../../context/fullScreenContext'
import Employee from '../employee/employee'
import ContextEmployee from '../../context/employeeContext'
import { getEmployees  } from '../../services/employee/employee';
import { useLocation } from 'wouter';

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
      '700': '#DAEFC8',
      '400': '#AFC69A'
    }
  },
});


const Qualification = forwardRef(( props, ref ) => {

    const [open, setOpen] = useContext(ContextDialog)
    const [employee, setEmployee] = useState(null)
    const [, setLocation] = useLocation('')

    const { idEmployee } = props

    /* Obtenemos las preguntas con su  posibles respuestas */
    const [listQuestions, setListQuestions] = useState([])
    const {token, setToken} = useContext(ContextLogin)

    useEffect(() => {
      getQuestionStructure(token)
      .then( questions => {
        if(questions.ok) {
          setListQuestions(questions.data) /* cuando pongo el data me da bucle infinito*/
        } else {
          if(questions.status == 401) {
            setToken(null)
            setLocation('/')
          }
        }
      })
      getEmployees(token).then( employees => {
        if(employees.ok) {
          setEmployee(employees.data.find( emp => emp.id == idEmployee))
        } else {
          if(employees.status == 401) {
            setToken(null)
            setLocation('/')
          }
        }
      })
    }, [])
    /*                          ------                     */

    let form = listQuestions

    const { questions } = form

    const tiers = [
      "/malo.gif",
      "/regular.gif",
      "/bueno.gif"
    ];

    const styles = {
      height: 160,
      width: 30,
      marginBottom: 0,
    }

    async function handleAnswer(idQuestion, idAnswer) {

      let idSurvey = form.id
      const answer = {}
      answer.question_id = idQuestion
      answer.answer_option_id = idAnswer
      const answers = []
      answers.push(answer)
      let active = await sendEvaluation({ idEmployee, idSurvey, answers}) // realiza el servicio
      setOpen(active)

    }

    return (
      <ThemeProvider theme={theme}>
        {/* #DAEFC8 */}
        <Box ref={ref}>
         {
            questions !== undefined ? (
              questions.map((questions, index) => (
                <Box  key={index}>
                  <Container  disableGutters maxWidth="md" component="main" sx={{ pt: 1, pb: 0 }} >
                    <Box sx={{display: 'flex', paddingLeft: 2, paddingRight: 5,  paddingTop: 2}}>
                      <Typography
                        component="h1"
                        variant="h2"
                        align="center"
                        color="text.primary"
                        gutterBottom
                        sx={{
                           paddingTop: 1,
                           paddingleft: 1
                        }}
                      >
                        <b>{ questions.description }</b>
                      </Typography>
                      {
                        employee !== null ? <Employee dataEmployee={employee} styles={styles}/> : null
                      }
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
                                  title={answer.description}
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
                                      mb: 0
                                    }}
                                  >
                                    <img src={tiers[answer.id - 1]} alt="GIF" style={{ width: '100%', height:'100%', objectFit:'cover'}}/>
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
                    >
                      Aún no hay preguntas
                    </Typography>
                  </Container>
                )
          }
          <ResponsiveAlert />
        </Box>
      </ThemeProvider>
    );
  }
)

export default Qualification