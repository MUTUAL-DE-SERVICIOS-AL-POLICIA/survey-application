
const apiURL = process.env.REACT_APP_BASE_API_URL
const object = {}
const idForm = 1

// En este archivo deberíamos recuperar el token

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

export async function sendEvaluation(params) {

    // obtener el token

    const { token, idEmployee, idSurvey, answers } = params

    let response =  await fetch(`http://192.168.2.99:8000/survey/save_evaluation`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
            employee_id: idEmployee,
            survey_id: idSurvey,
            answers: answers
        })
    })

    // console.log(response)
    if(response.ok) {
        if(response.status == '201') {
            return true
        }
    }
    return false
}
