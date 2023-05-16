import { useContext } from "react";
import Context from '../context/fullScreenContext'

export default function useFullScren() {
    const [childId, setChildId] = useContext(Context)

    return [
        childId,
        setChildId
    ]

}