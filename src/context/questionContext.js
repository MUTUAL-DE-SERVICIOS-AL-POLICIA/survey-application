import React, { useState } from "react";

const Context = React.createContext([])

export function QuestionContextProvider({ children }) {
    const [questions, setQuestions] = useState([])

    return <Context.Provider value={([ questions, setQuestions])}>
        { children }
    </Context.Provider>
}

export default Context