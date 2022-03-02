const requestURL = "https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json";
const cards = document.querySelector(".cards");

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function(jsonObject) {
        console.table (jsonObject); //checking valid response and data parsing
        const prophets = jsonObject['prophets']; //location? indented?
        prophets.forEach(displayProphets);
    })

    


//function 
function displayProphets (prophet) {
    let card = document.createElement("section");
    let h2 = document.createElement("h2");
    let portrait = document.createElement("img");
    let birthday = document.createElement("p");
    let place = document.createElement("p")

    //change textContent of h2 to prophet's full name
    // h2.textContent = prophet.name+ " " + prophet.lastname;

    //with template literal:
    h2.textContent = `${prophet.name} ${prophet.lastname}`;
    birthday.textContent = `Date of Birth: ${prophet.birthdate}`
    place.textContent = `Place of Birth: ${prophet.birthplace}`

    //build image attributes  ---------------need to check this
    portrait.setAttribute("src", prophet.imageurl);
    portrait.setAttribute("alt", "Portrait of" + prophet.name + " " + prophet.lastname);
    portrait.setAttribute("alt", `"Portrait of ${prophet.name} ${prophet.lastname} - ${prophet.order} Latter-day President"`);
    portrait.setAttribute("loading", "lazy");

    //add/append the section(card) with the h2 element
    card.appendChild(h2);
    card.appendChild(birthday);
    card.appendChild(place);
    card.appendChild(portrait);

    // add/append the existing html div with the cards class with the section (card)
    cards.appendChild(card);


}
    
