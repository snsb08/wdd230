const requestURL = "data.json";
const cards = document.querySelector(".business_cards");
const buslist = document.querySelector(".business_list");

fetch(requestURL)
.then(function (response) {
    return response.json();
})
.then(function(jsonObject) {
    console.table (jsonObject); 
    const npb_businesses = jsonObject['npb_businesses']; 
    npb_businesses.forEach(displayBusinesses);
    npb_businesses.forEach(displayBusinessesList)
})


function displayBusinesses (npb_business) {
    let card = document.createElement("section");
    let name = document.createElement("h2");
    // let logo = document.createElement("img");
    let address = document.createElement("p");
    let phone = document.createElement("p");
    let website = document.createElement("p")

    name.textContent = `${npb_business.name}`;
    address.textContent = `${npb_business.address}`;
    phone.textContent = `${npb_business.phone}`;
    website.textContent = `${npb_business.website}`;

    // logo.setAttribute

    card.appendChild(name);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(website);


    cards.appendChild(card);
    
}

// function displayBusinessesList (npb_businessList) {
//     let blist = document.createElement("section");
//     let namel = document.createElement("h2");
//     // let logo = document.createElement("img");
//     let addressl = document.createElement("p");
//     let phonel = document.createElement("p");
//     let websitel = document.createElement("p")

//     namel.textContent = `${npb_businessList.name}`;
//     addressl.textContent = `${npb_businessList.address}`;
//     phonel.textContent = `${npb_businessList.phone}`;
//     websitel.textContent = `${npb_businessList.website}`;

//     // logo.setAttribute

//     blist.appendChild(namel);
//     blist.appendChild(addressl);
//     blist.appendChild(phonel);
//     blist.appendChild(websitel);


//     buslist.appendChild(blist);
    
// }

function displayBusinessesList (npb_businessList) {
    let blist = document.createElement("table");
    let namel = document.createElement("td");
    // let logo = document.createElement("img");
    let addressl = document.createElement("td");
    let phonel = document.createElement("td");
    let websitel = document.createElement("td")

    namel.textContent = `${npb_businessList.name}`;
    addressl.textContent = `${npb_businessList.address}`;
    phonel.textContent = `${npb_businessList.phone}`;
    websitel.textContent = `${npb_businessList.website}`;

    // logo.setAttribute

    blist.appendChild(namel);
    blist.appendChild(addressl);
    blist.appendChild(phonel);
    blist.appendChild(websitel);


    buslist.appendChild(blist);
    
}