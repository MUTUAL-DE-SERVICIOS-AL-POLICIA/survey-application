import React, { useContext, useState, useEffect } from 'react'
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid'
import { Box, CardActionArea, CardHeader } from '@mui/material';
import { Card, CardContent } from "@mui/material"
import { createTheme } from '@mui/material/styles';
import { useRef } from 'react'
import ContextLogin from '../../context/userContext'
import { getQuestionStructure, sendEvaluation } from '../../services/qualification/qualificationService';
import ResponsiveAlert from '../common/ResponsiveAlert'
import ContextDialog from '../../context/activeDialogContext'

const theme = createTheme();

export default function Qualification( props ) {

    const [open, setOpen] = useContext(ContextDialog)

    const { idEmployee } = props

    /* Obtenemos las preguntas con su  posibles respuestas */
    const [listQuestions, setListQuestions] = useState([])
    const {token} = useContext(ContextLogin)

    useEffect(() => {
      getQuestionStructure(token)
      .then( questions => {
        setListQuestions(questions.data) /* cuando pongo el data me da bucle infinito*/
      })
    }, [])
    /*                          ------                     */

    let form = listQuestions

    // const fullScrenReferens = useRef(null)
    const { questions } = form

    const tiers = [
      "/bueno.gif",
      "/regular.gif",
      "/malo.gif"
    ];

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
      <div id="screen">
         {
            questions !== undefined ? (
              questions.map((questions, index) => (
                <div key={index}>
                  <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 3, pb: 3 }} >
                    <Typography
                      component="h1"
                      variant="h2"
                      align="center"
                      color="text.primary"
                      gutterBottom
                    >
                      { questions.description}
                    </Typography>
                    <Typography variant='h5' align='center' color="text.secondary" component="p">
                      Por favor responda la pregunta
                    </Typography>
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
                              <Card elevation={2}>
                                <CardHeader
                                  title={answer.description}
                                  titleTypographyProps={{ align: 'center' }}
                                  subheaderTypographyProps={{ align: 'center' }}
                                  sx={{
                                    backgroundColor: (theme) => theme.palette.mode === 'light'
                                      ? theme.palette.grey[200]
                                      : theme.palette.grey[700]
                                  }}
                                />
                                <CardContent>
                                  <Box
                                    sx={{
                                      display: 'flex',
                                      justifyContent: 'center',
                                      alignItems: 'baseline',
                                      mb: 2
                                    }}
                                  >
                                    <img src={tiers[answer.id - 1]} alt="GIF bueno" style={{ width: '100%', height:'100%', objectFit:'cover'}}/>
                                  </Box>
                                </CardContent>
                              </Card>
                            </CardActionArea>
                          </Grid>
                        ))
                      }
                    </Grid>
                  </Container>
                </div>
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
        </div>
    );
  }