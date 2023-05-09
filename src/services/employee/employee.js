const apiURL = process.env.REACT_APP_BASE_API_URL

const object = {}

export default function employee({ token }) {

    let credential = `Token ${token}`
    return fetch(`${apiURL}/survey/employee`,{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Token afd1f26227d65d93a962b7c0b2647a1c252e6a4'
        }
    }).then(res => res.json())
        .then(response => {
            object = response
            return object
        })
}