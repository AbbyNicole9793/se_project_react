import { baseUrl } from "./constants"

export function checkResponse(res) {
    return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`)
}

function getItems() {
    return fetch(`${baseUrl}/items`)
        .then(checkResponse)
}

function postItems(data, token) {
    return fetch(`${baseUrl}/items`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, 
        },
        body: JSON.stringify({
            ...data
        })
    })
        .then(checkResponse)
}

function deleteItem(itemId, token) {
    return fetch(`${baseUrl}/items/${itemId}`, { method: "DELETE", headers: {
      Authorization: `Bearer ${token}`, 
    }})
        .then(checkResponse)
}

function addCardLike(id, token) {
  return fetch(`${baseUrl}/items/${id}/likes`, {
    method: "PUT", // 💡 PUT adds a like
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then(checkResponse);
}

function removeCardLike(id, token) {
  return fetch(`${baseUrl}/items/${id}/likes`, {
    method: "DELETE", // 💡 DELETE removes a like
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then(checkResponse);
}

function updateProfile({ name, avatar }, token) {
  console.log("Sending to backend:", { name, avatar });
  return fetch(`${baseUrl}/users/me`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ name, avatar }),
  }).then(checkResponse);
}



export { getItems, postItems, deleteItem, updateProfile, addCardLike, removeCardLike }