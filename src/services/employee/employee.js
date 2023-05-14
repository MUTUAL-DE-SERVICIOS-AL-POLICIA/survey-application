
const apiURL = process.env.REACT_APP_BASE_API_URL
const object = {}

export function getEmployees( token ) {

    return fetch(`${apiURL}/survey/employee/`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
    }).then(res => {
        if(!res.ok) {
            throw new Error('Ocurrio un error al obtener a los empleados')
        }
        return res.json()
    }).then(res => {
        object.data = res
        return object
    })
}