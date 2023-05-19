const apiURL = process.env.REACT_APP_BASE_API_URL
const object = {}

export default async function login({ username, password}) {

    try{
        const response = await fetch(`${apiURL}/survey/api/token/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password })
        })
        object.ok = response.ok
        object.status = response.status
        const result = await response.json()
        object.token = result.access
        return object
    } catch(e) {
        throw new Error(`Ocurrió un error\n${e}`)
    }
}