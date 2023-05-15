import React, { useState } from "react";

const Context = React.createContext([])

export function FullScreenContextProvider({ children }) {

    const [referens, setReferens] = useState(null)

    return <Context.Provider value={([ referens, setReferens ])}>
        { children }
    </Context.Provider>
}

export default Context