import { useCallback, useContext } from "react";
import Context from '../context/questionContext'
import ContextUser from '../context/userContext'
import { getQuestionStructure } from '../services/qualification/qualificationService'

export default function useQuestion() {
    const {token} = useContext(ContextUser)
    const [questions, setQuestions] = useContext(Context)

    // const aux = () => {getQuestionStructure(token)
    //     .then( questions => {
    //         // setQuestions(questions.data.questions)
    //     })
    // }

    // const getQuestion = useCallback(() => {
    //     questions
    // }, [token, setQuestions])

    // return {
    //     getQuestion
    // }
}