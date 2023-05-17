import React from "react";
import Qualification from '../../components/qualification/qualification';
import { CssBaseline, GlobalStyles } from "@mui/material";
import Header from "../../components/common/Header";
import { useRef } from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles';

export default function QualificationPage({ params }) {

  const { id } = params
  const qualificationRef = useRef()

  const theme = createTheme({
    palette: {
      background: {
        // default: '#F6FCF0'
        default: '#D9E9E8'
        // default: '#ffffff'
      }
    }
  });

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <GlobalStyles styles={{ ul: { margin:0, padding:0, listStyle: 'none', bgcolor: 'background.default'}}}/>
        <CssBaseline />
        <Header />
        <Qualification id="qualification" idEmployee={id} ref={qualificationRef} />
      </ThemeProvider>
    </React.Fragment>
  )
}