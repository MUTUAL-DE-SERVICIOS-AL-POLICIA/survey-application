
const apiURL = process.env.REACT_APP_BASE_API_URL

const object = {}
const idForm = 1

export function getQuestionStructure( token ) {

    return fetch(`${apiURL}/survey/get_survey/${idForm}/answers`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
    }).then(res => {
        if(!res.ok) {
            throw new Error('Ocurrio un error en el inicio de sesión')
        }
        return res.json()
    }).then(res => {
        object.data = res
        return object
    })
}
