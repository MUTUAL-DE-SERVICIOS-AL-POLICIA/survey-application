import axios from 'axios';

const apiURL = process.env.REACT_APP_BASE_API_URL

// const object = {}

// const apiURL = 'https://reqres.in/api/users?page=2'


export default function employee( token ) {

    // console.log("dentro del servicio")
    // console.log(token)

    console.log(token)

    axios.get(`${apiURL}/survey/employee/`, {
    // axios.get(apiURL,{
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
    .then(response => {
        console.log("exitoso")
        console.log(response)
        return response
    })
    .catch(error => {
        console.log("este es el error")
        console.log(error)
        return null
    })

    // let object = {}


    // return fetch(`${apiURL}/survey/employee`,{
    // return fetch(apiURL, {
    //     method: 'GET',
    //     headers: {
    //         'Content-Type': 'application/json',
    //         'Authorization': `Token ${token}`
    //     }
    // }).then(res => res.json())
    //     .then(response => {
    //         object = response
    //         console.log(response)
    //     })

    // return object
}