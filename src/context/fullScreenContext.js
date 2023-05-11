import React, { useState } from "react";

const Context = React.createContext({})

export function FullScreenContextProvider({ children }) {
    const [childId, setChildId] = useState(null)

    return <Context.Provider value={({ childId, setChildId })}>
        { children }
    </Context.Provider>
}

export default Context