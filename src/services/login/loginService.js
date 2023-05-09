const apiURL = process.env.REACT_APP_BASE_API_URL

const object = {}

export default function login({ username, password}) {

    return fetch(`${apiURL}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({username, password})
    }).then(res => {
        if(!res.ok) {
            throw new Error('Ocurrio un error en el inicio de sesión')
        }
        return res.json()
    }).then(res => {
        object.token = res.token
        return object
    })
}