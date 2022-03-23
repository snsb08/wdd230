const request = "data.json";
const cards = document.querySelector(".business_cards");
const buslist = document.querySelector(".business_list");
// const spotlight = document.querySelector(".spotlightcontainer")

// fetch(requestURL)
// .then(function (response) {
//     return response.json();
// })
// .then(function(jsonObject) {
//     console.table (jsonObject); 
//     const npb_businesses = jsonObject['npb_businesses']; 
//     npb_businesses.forEach(displayBusinesses);
//     npb_businesses.forEach(displayBusinessesList)
// })

fetch(request)
.then(function (response) {
    return response.json();
})
.then(function(jsonObject) {
    console.table (jsonObject); 
    let npb_businesses = jsonObject['npb_businesses']; 
    // npb_businesses.forEach(displayBusinesses);

    if (window.innerWidth > 520 && window.innerWidth < 1000) {
        npb_businesses.forEach(displayBusinessesList)
    } else {
        npb_businesses.forEach(displayBusinesses);
    }
    
    document.getElementById("list_view").addEventListener("click", () => {
        buslist.innerHTML = ""
        npb_businesses.forEach(displayBusinessesList)
        cards.innerHTML = ""

    });

    document.getElementById("card_view").addEventListener("click", () => {
        cards.innerHTML = ""
        npb_businesses.forEach(displayBusinesses)
        buslist.innerHTML = ""
        
    });
})
    


function displayBusinesses (npb_business) {
    let card = document.createElement("section");
    let name = document.createElement("h2");
    let logo = document.createElement("img");
    let address = document.createElement("p");
    let phone = document.createElement("p");
    let website = document.createElement("p")
    let active = document.getElementById("card_view")
    let notActive = document.getElementById("list_view")

    name.textContent = `${npb_business.name}`;
    address.textContent = `${npb_business.address}`;
    phone.textContent = `${npb_business.phone}`;
    website.textContent = `${npb_business.website}`;
    notActive.classList.add("notActivebtn");
    active.classList.remove("notActivebtn");

    logo.setAttribute("src", npb_business.logo);
    logo.setAttribute("alt", `Logo of ${npb_business.name}`)
    logo.setAttribute("loading", "lazy");

    // card.appendChild(name);
    card.appendChild(logo);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(website);


    cards.appendChild(card);
    // cards.prepend(card);
    
}

function removedisplayBusinesses () {
    let card = document.createElement("section");
    cards.prepend(card);
}


function displayBusinessesList (npb_businessList) {
    let blist = document.createElement("table");
    let namel = document.createElement("td");
    // let logo = document.createElement("img");
    let addressl = document.createElement("td");
    let phonel = document.createElement("td");
    let websitel = document.createElement("td")
    let active = document.getElementById("list_view")
    let notActive = document.getElementById("card_view")

    namel.textContent = `${npb_businessList.name}`;
    addressl.textContent = `${npb_businessList.address}`;
    phonel.textContent = `${npb_businessList.phone}`;
    websitel.textContent = `${npb_businessList.website}`;
    notActive.classList.add("notActivebtn");
    active.classList.remove("notActivebtn");

    // logo.setAttribute

    blist.appendChild(namel);
    blist.appendChild(addressl);
    blist.appendChild(phonel);
    blist.appendChild(websitel);


    buslist.appendChild(blist);
    
}

// function displayspotlight (spotlight) {
//     let spotlight1 = document.querySelector(".spotlight")
//     let title1 = document.createElement("h2")
//     let subtitle1 = document.createElement("h3")
//     let image1 = document.createElement("img")
//     let web1 = document.createElement("p")
//     let phone1 = document.createElement("p")

//     title1.textContent = `${npb_businessList.name}`;
//     subtitle1.textContent = `${npb_businessList.subtitle}`;
//     web1.textContent = `${npb_businessList.website}`;
//     phone1.textContent = `${npb_businessList.phone}`;

//     image1.setAttribute("src", npb_business.clipart);
//     image1.setAttribute("alt", `clipart for ${npb_business.name}`)
//     image1.setAttribute("loading", "lazy");

//     spotlight1.appendChild(title1);
//     spotlight1.appendChild(subtitle1);
//     spotlight1.appendChild(image1);
//     spotlight1.appendChild(web1);
//     spotlight1.appendChild(phone1);

// }