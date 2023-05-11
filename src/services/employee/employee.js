import axios from 'axios';

const apiURL = process.env.REACT_APP_BASE_API_URL

// const apiURL = 'https://reqres.in/api/users?page=2'

const object = {}

export function getEmployees( token ) {

    // try {
    //     axios.get(`${apiURL}/survey/employee/`, {
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'Authorization': `Bearer ${token}`
    //         }
    //     }).then(response => {
    //         return response
    //     }).catch(e => {
    //         console.log(e)
    //     })
    // } catch(e) {
    //     console.log(e)
    // }

    // // .then(response => {
    // //     return response.data
    // // })
    // // .catch(error => {
    // //     console.log(error)
    // //     return null
    // // })

    return fetch(`${apiURL}/survey/employee/`, {
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