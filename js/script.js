"use strict"

// fetch("127.0.0.1:8000/morningBlock")
// .then(res => res.json())
// .then(json => console.log(json))
// .catch(() => console.log("Error"));

// fetch("127.0.0.1:8000/morningBlock", {
//     method: "POST",
//     body: JSON.stringify(),
//     headers: {
//         'Content-type': 'application/json'
//     }
// })

fetch("https://jsonplaceholder.typicode.com/todos/1")
.then(response => response.json())
.then(json => console.log(json))
.catch(() => console.log("Error"));

fetch("https://jsonplaceholder.typicode.com/posts", {
method: "POST",
body: JSON.stringify({name: "Eldar"}),
headers: {
    'Content-type': 'application/json'
}
})
.then(response => response.json())
.then(json => console.log(json))
.catch(() => console.log("Error"));