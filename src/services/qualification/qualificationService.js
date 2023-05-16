
const apiURL = process.env.REACT_APP_BASE_API_URL
const object = {}
const idForm = 1

export async function getQuestionStructure( token ) {

    try{
        const response = await fetch(`${apiURL}/survey/get_survey/${idForm}/answers`, {
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

export async function sendEvaluation(params) {

    const { token, idEmployee, idSurvey, answers } = params

    let response =  await fetch(`${apiURL}/survey/save_evaluation`, {
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

    if(response.ok) {
        if(response.status == '201') {
            return true
        }
    }
    return false
}
