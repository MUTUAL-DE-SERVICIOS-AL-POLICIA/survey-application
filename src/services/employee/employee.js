const apiURL = process.env.REACT_APP_BASE_API_URL

const object = {}

export default function employee(token) {
    console.log("token dentro del servicio")
    // console.log(token)
    return fetch(`${apiURL}/survey/employee`,{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    }).then(res => res.json())
        .then(response => {
            object = response
            return object
        })
}