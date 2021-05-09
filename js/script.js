"use strict"

let body = document.querySelector("body"),
    diary = body.querySelector(".diary"),
    checks = body.querySelectorAll(".main__check-left"),
    habitChecks = body.querySelectorAll(".main__check"),
    starChecks = body.querySelectorAll(".main__star"),
    dayMode = body.querySelector(".header__day"),
    nightMode = body.querySelector(".header__night"),
    asideSize = body.querySelector(".aside__size"),
    aside = body.querySelector(".aside");

console.log(checks);

checks.forEach(check => check.addEventListener('click', () => check.classList.toggle("main__checked")));
habitChecks.forEach(check => check.addEventListener('click', () => check.classList.toggle("main__checked")));
starChecks.forEach(check => check.addEventListener('click', () => check.classList.toggle("main__checked")));

nightMode.addEventListener('click', () => {
    dayMode.classList.remove('header__active');
    nightMode.classList.add('header__active');
    body.classList.add('darkMode');
});
dayMode.addEventListener('click', () => {
    dayMode.classList.add('header__active');
    nightMode.classList.remove('header__active');
    body.classList.remove('darkMode');
});

asideSize.addEventListener('click', () => {
    diary.classList.toggle("small");
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