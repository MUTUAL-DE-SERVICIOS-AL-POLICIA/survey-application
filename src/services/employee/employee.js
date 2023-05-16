
const apiURL = process.env.REACT_APP_BASE_API_URL
const object = {}

export async function getEmployees( token ) {

    try{
        const response = await fetch(`${apiURL}/survey/employee/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        })
        object.ok = response.ok
        object.status = response.status
        const result = await response.json()
        object.data = result
        return object
    } catch(e) {
        throw new Error(`Ocurrió un error\n${e}`)
    }
}