import { useCallback, useContext } from 'react'
import Context from '../context/userContext'
import employee from '../services/login/loginService'
import ContextLogin from '../context/userContext'

export default function useEmployee() {
	const {employees, setEmployees} = useContext(Context)
	// const {token}= useContext(ContextLogin)


	const getEmployees = useCallback(() => {
        // Aqui llamamos al servicio
        employee('fafd1f26227d65d93a962b7c0b2647a1c252e6a4').then((object) => { console.log("esto es undefined " + object)})
		.catch((error) => { console.log(error)})

	}, [])

	return {
		getEmployees,
        setEmployees: setEmployees,
	}
}