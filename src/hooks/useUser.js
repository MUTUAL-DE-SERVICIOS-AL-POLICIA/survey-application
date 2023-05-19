import { useCallback, useContext } from 'react'
import Context from '../context/userContext'
import login from '../services/login/loginService'

export default function useUser() {
	const {token, setToken} = useContext(Context)

	const signIn = useCallback(({ username, password }) => {
		login({ username, password })
			.then( tokenLogin => {
				if(tokenLogin.ok) {
            		window.sessionStorage.setItem('token', tokenLogin.token) /* JSON.stringify(tokenLogin.token) */
					setToken(tokenLogin.token)
				}
			}).catch(error => {
				window.sessionStorage.removeItem('token')
				setToken(null)
				console.log("aqui")
				console.error(error)
			})
	}, [setToken])

	const signOut = useCallback(() => {
		window.sessionStorage.removeItem('token')
		setToken(null)
	}, [setToken])

	return {
		isLogged: Boolean(token),
		signIn,
		signOut,
		token
	}
}
