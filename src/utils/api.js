const baseUrl = 'http://localhost:3001'

function getItems() {
    return fetch(`${baseUrl}/items`)
    .then((res) => {
        return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`)
    })
}

function postItems(data) {
    return fetch(`${baseUrl}/items`, {method: "POST", 
        headers: {
      "Content-Type": "application/json"
    },
        body: JSON.stringify({
        data
    })
    })
    .then((res) => 
    res.ok ? res.json() : Promise.reject(`Error: ${res.status}`))
}

function deleteItems(itemId) {
    return fetch(`${baseUrl}/items/${itemId}`, {method: "DELETE"})
    .then((res) => 
    res.ok ? res.json() : Promise.reject(`Error: ${res.status}`))
}

export { getItems, postItems, deleteItems }