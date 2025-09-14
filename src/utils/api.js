const baseUrl = 'http://localhost:3001'

export function checkResponse(res) {
  return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`)
}

function getItems() {
    return fetch(`${baseUrl}/items`)
    .then(checkResponse)
}

function postItems(data) {
    return fetch(`${baseUrl}/items`, {method: "POST", 
        headers: {
      "Content-Type": "application/json"
    },
        body: JSON.stringify({
        ...data
    })
    })
    .then(checkResponse)
}

function deleteItems(itemId) {
    return fetch(`${baseUrl}/items/${itemId}`, {method: "DELETE"})
    .then(checkResponse)
}

export { getItems, postItems, deleteItems }