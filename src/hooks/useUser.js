import { useCallback, useContext } from 'react'
import Context from '../context/userContext'
import login from '../services/login/loginService'

export default function useUser() {
	const {token, setToken} = useContext(Context)

	const signIn = useCallback(({ username, password }) => {
		login({ username, password })
			.then( token => {
            	window.sessionStorage.setItem('token', JSON.stringify(token))
				setToken(token)
			}).catch(err => {
				window.sessionStorage.removeItem('token', token)
				console.error(err)
			})
	}, [setToken])

	const signOut = useCallback(() => {
		window.sessionStorage.removeItem('token')
		setToken(null)
	}, [setToken])

	return {
		isLogged: Boolean(token),
		signIn,
		signOut
	}
}
