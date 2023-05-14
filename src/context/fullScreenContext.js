import React, { useState } from "react";

const Context = React.createContext([])

export function FullScreenContextProvider({ children }) {

    const [idElement, setIdElement] = useState(null)

    return <Context.Provider value={([ idElement, setIdElement ])}>
        { children }
    </Context.Provider>
}

export default Context