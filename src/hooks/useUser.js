import { useCallback, useContext } from 'react'
import Context from '../context/userContext'
import login from '../services/login/loginService'

export default function useUser() {
	const { token, setToken } = useContext(Context)

	const signIn = useCallback(async ({ username, password }) => {
		try {
			let response = await login({ username, password })

			if (response.ok)
				if (response.status === 200) {
					window.sessionStorage.setItem('token', response.token) /* JSON.stringify(tokenLogin.token) */
					setToken(response.token)
				}

			return Boolean(response.token)

		} catch (e) {
			window.sessionStorage.removeItem('token')
			setToken(null)
		}
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
