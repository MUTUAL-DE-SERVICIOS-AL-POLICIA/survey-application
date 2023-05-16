import React, { useState } from 'react'

const Context = React.createContext([])

export function EmployeeContextProvider ({ children }) {

    const [employees, setEmployees] = useState([])

    return <Context.Provider value={([employees, setEmployees])}>
        { children }
    </Context.Provider>
}

export default Context