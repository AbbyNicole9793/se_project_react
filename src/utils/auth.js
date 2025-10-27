import {baseUrl} from "./constants"
import { checkResponse } from "./api"


function signUp({ email, password, name, avatar }) {
    return fetch(`${baseUrl}/signup`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password, name, avatar })
    })
        .then(checkResponse)
}

function signIn({ email, password }) {
    return fetch(`${baseUrl}/signin`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password })
    })
        .then(checkResponse)
}

function checkValidity(token) {
    return fetch(`${baseUrl}/users/me`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`,
        }
    })
        .then(checkResponse)
}


export { signUp, signIn, checkValidity }