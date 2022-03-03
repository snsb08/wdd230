const requestURL = "chamber/data.json";
const cards = document.querySelector(".business_cards");

fetch(requestURL)
.then(function (response) {
    return response.json();
})
.then(function(jsonObject) {
    console.table (jsonObject); 
    const npb_businesses = jsonObject['npb_businesses']; 
    npb_businesses.forEach(displayBusinesses);
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

}