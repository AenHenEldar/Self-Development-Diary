"use strict"

let body = document.querySelectorAll("body"),
    checks = document.querySelectorAll(".main__check-left"),
    habitChecks = document.querySelectorAll(".main__check"),
    dayMode = document.querySelector(".header__day"),
    nightMode = document.querySelector(".header__night");

console.log(checks);

checks.forEach(check => check.addEventListener('click', () => check.classList.toggle("main__checked")));
habitChecks.forEach(check => check.addEventListener('click', () => check.classList.toggle("main__checked")));

nightMode.addEventListener('click', () => {
    dayMode.classList.remove('header__active');
    nightMode.classList.add('header__active');
});
dayMode.addEventListener('click', () => {
    dayMode.classList.add('header__active');
    nightMode.classList.remove('header__active');
});



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

// fetch("https://jsonplaceholder.typicode.com/todos/1")
// .then(response => response.json())
// .then(json => console.log(json))
// .catch(() => console.log("Error"));

// fetch("https://jsonplaceholder.typicode.com/posts1", {
// method: "POST",
// body: JSON.stringify({name: "Eldar"}),
// headers: {
//     'Content-type': 'application/json'
// }
// })
// .then(response => response.json())
// .then(json => console.log(json))
// .catch(() => console.log("Error"));