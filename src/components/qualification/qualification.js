import React, { useContext, useState } from 'react'
import GlobalStyles from '@mui/material/GlobalStyles';
import CssBaseline from '@mui/material/CssBaseline';
import  Header   from '../../components/common/Header'
import ContextQuestion from '../../context/questionContext';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid'


export default function Qualification( {form} ) {


    let questions = form.questions

    console.log(questions)

    // console.log(questions[0])

    // questions.map((question) => {
    //   console.log(question)
    // })

    return (
      <React.Fragment>
         <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
         <CssBaseline />
         <Header />
         {/* {
            questions.map((question) => (
            <> */}
             <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
              <Typography
                 component="h1"
                 variant="h2"
                 align="center"
                 color="text.primary"
                 gutterBottom
              >
                 {/* {question.description} */}
               </Typography>
               <Typography variant="h5" align="center" color="text.secondary" component="p">
                   Por favor responda la pregunta{'\u{1F600}'}
               </Typography>
             </Container>
             <Container maxWidth="md" component="main">
               <Grid container spacing={5} alignItems="flex-end">
                 {/* {question.answers.map((answer) => ( */}
                   {/* <Grid */}
                     {/* item */}
                     {/* key={answer.id} */}
                     {/* xs={12} */}
                     {/* sm={6} */}
                     {/* md={4} */}
                   {/* > */}
                     {/* <CardActionArea> */}
                       {/* <Card elevation={2}> */}
                         {/* <CardHeader */}
                           {/* title={answer.description} */}
                           {/* titleTypographyProps={{ align: 'center' }} */}
                           {/* subheaderTypographyProps={{ */}
                             {/* align: 'center', */}
                           {/* }} */}
                           {/* sx={{ */}
                             {/* backgroundColor: (theme) => */}
                               {/* theme.palette.mode === 'light' */}
                                 {/* ? theme.palette.grey[200] */}
                                 {/* : theme.palette.grey[700], */}
                           {/* }} */}
                         {/* /> */}
                         {/* <CardContent> */}
                           {/* <Box */}
                             {/* sx={{ */}
                               {/* display: 'flex', */}
                               {/* justifyContent: 'center', */}
                               {/* alignItems: 'baseline', */}
                               {/* mb: 2, */}
                             {/* }} */}
                           {/* > */}
                             {/* <img src={tiers[answer.id]} alt="GIF bueno" style={{ width: '100%', height:'100%', objectFit:'cover'}}/> */}
                           {/* </Box> */}
                         {/* </CardContent> */}
                       {/* </Card> */}
                     {/* </CardActionArea> */}
                   {/* </Grid> */}
                 {/* ))} */}
               </Grid>
             </Container>
             {/* </>
          ))} */}
       </React.Fragment>
    );
  }