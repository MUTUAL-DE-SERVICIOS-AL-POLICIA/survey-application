import React, { useContext, useEffect, useState } from "react";
import Qualification from '../../components/qualification/qualification';
import { CssBaseline, GlobalStyles } from "@mui/material";
import Header from "../../components/common/Header";
import { useRef } from 'react'
import Context from "../../context/fullScreenContext";

export default function QualificationPage({ params }) {

  /* Obtenemos al empleado solicitado */
  const { id } = params
  /*              ---                 */
  const qualificationRef = useRef()
  // const [screen, setScreen] = useState(null)
  const [referens, setReferens] = useContext(Context)

  return (
    <React.Fragment>
      <GlobalStyles styles={{ ul: { margin:0, padding:0, listStyle: 'none'}}}/>
      <CssBaseline />
      <Header qualificationRef={qualificationRef} />
      <Qualification id="qualification" idEmployee={id} ref={qualificationRef} />
    </React.Fragment>
  )
}