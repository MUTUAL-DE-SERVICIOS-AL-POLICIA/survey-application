import { useContext, useState, useEffect } from "react";
import useEmployee from '../../hooks/useEmployee';
import { getQuestionStructure } from '../../services/qualification/qualificationService';
import ContextLogin from '../../context/userContext'
import ContextQuestion from '../../context/questionContext'
import Qualification from '../../components/qualification/qualification';


export default function QualificationPage({ params }) {

  /* Obtenemos al empleado solicitado */
  // const [, , getEmployee ] = useEmployee()
  // const { id } = params
  /*              ---                 */

  /* Obtenemos las preguntas con su  posibles respuestas */
  const [listQuestions, setListQuestions] = useState([])
  const {token} = useContext(ContextLogin)
  // const [, setQuestions] = useContext(ContextQuestion)

  useEffect(() => {
    getQuestionStructure(token)
    .then( questions => {
      setListQuestions(questions.data) /* cuando pongo el data me da bucle infinito*/
      // setQuestions(questions.data)
    })
  }, [])
  /*                          ------                     */

  console.log(listQuestions)

  return (
      // listQuestions === [] ? (<Qualification form={listQuestions} />) : (<p>Entra aca</p>)
      <Qualification form={listQuestions} />
  )
}