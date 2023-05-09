import { useCallback, useContext } from 'react'
import Context from '../context/userContext'
import employee from '../services/login/loginService'
import ContextLogin from '../context/userContext'

export default function useEmployee() {
	const {employees, setEmployees} = useContext(Context) /// useContext nos permite acceder a la infomración del objeto

	console.log(employees)
	// const {token}= useContext(ContextLogin) // accedemos a la información del context con useContext


	// const getEmployees = useCallback(() => {
    //     // Aqui llamamos al servicio
    //     employee('fafd1f26227d65d93a962b7c0b2647a1c252e6a4').then((object) => { console.log("esto es undefined " + object)})
	// 	.catch((error) => { console.log(error)})

	// }, [])

}