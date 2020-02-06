const fetch = require("node-fetch");

// Question 1
const subtract = (x, y) => { return x - y };


// Question 2
const baseUrl = "https://elephant-api.herokuapp.com/elephants";
let getNames = fetch(baseUrl)
    .then((response) => {
        return response.json();
    }).then((json) => {
        for(i = 0; i < json.length; i++) {
            if(json[i].name) {
                console.log(json[i].name);
            }
        }
    }).catch((error) => {
        console.log(error);
        window.location.href = "error.html";
    });


// Question 3
let sentence = "These cats are outrageous";
sentence = sentence.replace("cats", "giraffes");
console.log(sentence);


// Question 4
let url = new URL("https://my.site.com?userId=9");
const params = new URLSearchParams(url.search);

if(params.has("userId")) {
    let userId = params.get("userId");
    if(userId < 10) {
        window.location.href = "first.html";
    } else if(userId >= 10) {
        window.location.href = "second.html"
    }   
} else {
    window.location.href = "third.html";
}


// Question 5
const container = document.querySelector(".container");
const button = container.querySelector(".btn");
container.removeChild(button);

// Question 6
// Probably not this solution you were looking for but here you go.
let list = document.querySelector(".animals");
let listItems = list.querySelectorAll("li");

const newHTML = '<li class="parrots">Parrots</li>';
let listArray = [];

listItems.forEach(e => {    
    listArray.push(`<li class="${e.innerHTML.toLowerCase()}">${e.innerHTML}</li>`);
});

listArray.splice(1, 0, newHTML);
list.innerHTML = listArray.join("");


// Question 7
let ratingUrl = "https://api.rawg.io/api/games/3801";
let rating = fetch(ratingUrl)
    .then(response => {
        return response.json();
    })
    .then(json => {
        addRating(json)
    })
    .catch(error => {
        console.log(error);
        
    });

let addRating = (jsonInput) => {
    let ratingDiv = document.querySelector(".rating");
    newHtml = JSON.stringify(jsonInput.rating);
    ratingDiv.innerHTML += newHtml
}
