import React, { useEffect } from "react";
import Qualification from '../../components/qualification/qualification';
import { CssBaseline, GlobalStyles } from "@mui/material";
import Header from "../../components/common/Header";
import { useRef } from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useLocation } from "wouter";
import { WindowOutlined } from "@mui/icons-material";

export default function QualificationPage({ params }) {

  const { id } = params
  const qualificationRef = useRef()

  const theme = createTheme({
    palette: {
      background: {
        default: '#D9E9E8'
      }
    }
  });

  const [location, setLocation] = useLocation()

  useEffect(() => {
    const handleBackButton = (event) => {
      event.preventDefault()
      setLocation(location)
    }
    window.history.pushState(null, null, window.location.pathname)
    window.addEventListener('popstate', handleBackButton)

    return () => {
      window.removeEventListener('popstate', handleBackButton)
    }
  }, [location])

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none', bgcolor: 'background.default' } }} />
        <CssBaseline />
        <Header showReport={false} />
        <Qualification id="qualification" idEmployee={id} ref={qualificationRef} />
      </ThemeProvider>
    </React.Fragment>
  )
}