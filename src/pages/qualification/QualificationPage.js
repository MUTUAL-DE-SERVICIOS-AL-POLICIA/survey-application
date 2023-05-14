import React from "react";
import Qualification from '../../components/qualification/qualification';
import { CssBaseline, GlobalStyles } from "@mui/material";
import Header from "../../components/common/Header";

export default function QualificationPage({ params }) {

  /* Obtenemos al empleado solicitado */
  const { id } = params
  /*              ---                 */

  return (
    <React.Fragment>
      <GlobalStyles styles={{ ul: { margin:0, padding:0, listStyle: 'none'}}}/>
      <CssBaseline />
      <Header />
      <Qualification idEmployee={id}/>
    </React.Fragment>
  )
}