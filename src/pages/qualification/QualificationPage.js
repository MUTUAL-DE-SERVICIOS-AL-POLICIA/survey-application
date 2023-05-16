import React, { useContext, useEffect, useState } from "react";
import Qualification from '../../components/qualification/qualification';
import { CssBaseline, GlobalStyles } from "@mui/material";
import Header from "../../components/common/Header";
import { useRef } from 'react'
// import Context from "../../context/fullScreenContext";
import { createTheme, ThemeProvider } from '@mui/material/styles';

export default function QualificationPage({ params }) {

  const { id } = params
  const qualificationRef = useRef()
  // const [referens, setReferens] = useContext(Context)

  const theme = createTheme({
    palette: {
      background: {
        default: '#F6FCF0'
      }
    }
  });

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <GlobalStyles styles={{ ul: { margin:0, padding:0, listStyle: 'none', bgcolor: 'background.default'}}}/>
        <CssBaseline />
        <Header qualificationRef={qualificationRef} />
        <Qualification id="qualification" idEmployee={id} ref={qualificationRef} />
      </ThemeProvider>
    </React.Fragment>
  )
}