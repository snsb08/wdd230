

// dates:
let date = new Date();
let year = date.getFullYear();
document.getElementById('currentYear').innerHTML = "\u00A9" + year + " NPB Chamber of Commerce";

let date_updated = document.lastModified;

let lastModif = new Date(document.lastModified);


const dateModified = document.querySelector("#dateModified");
dateModified.textContent =" Last Updated:" + document.lastModified;

// Navigation:
function toggleMenu () {
    document.getElementById("navList").classList.toggle("open");
    document.getElementById("hamburguerBtn").classList.toggle("open");
}

const x= document.getElementById('hamburguerBtn');
x.onclick = toggleMenu;

// current date
const datefield = document.querySelector("#todayDate");

const now= new Date();
const fulldate = new Intl.DateTimeFormat("en-US", {
    dateStyle: "full" }).format(
        now
    ); 
    datefield.innerHTML = `<em>${fulldate}</em>`;


//hidden date for form
window.addEventListener("load", function (){
    document.querySelector(".hiddendate").innerHTML = now; 

});   

//Spotlights

const requestURL = "data.json";
const spotlightContainer = document.querySelector(".spotlightcontainer");
const spotlights = document.querySelectorAll(".spotlight");

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function(jsonObject) {
        console.table (jsonObject); 
        const npb_businesses = jsonObject['npb_businesses']; 
        // npb_businesses.forEach(displayBusinesses);
        // let name1 = npb_businesses.name [Math.floor(Math.random() * 12)]

        // npb_businesses.forEach(displayspotlight); 

        const displayMembers = npb_businesses.filter((npb_business) => {
            return npb_business.membership == "silver" || npb_business.membership == "gold";
        });
        spotlights.forEach((spotlight1) => {
            const i = Math.floor(Math.random()*displayMembers.length);
            const npb_business = displayMembers[i];

            let title1 = document.createElement("h2")
            let subtitle1 = document.createElement("h3")
            let image1 = document.createElement("img")
            let contact1 = document.createElement("p")

            title1.textContent = `${npb_business.name}`;
            subtitle1.textContent = `${npb_business.subtitle}`;
            contact1.innerHTML = `${npb_business.website} <br> ${npb_business.phone}`;

            image1.setAttribute("src", npb_business.clipart);
            image1.setAttribute("alt", `clipart for ${npb_business.name}`)
            image1.setAttribute("loading", "lazy");

            spotlight1.appendChild(title1);
            spotlight1.appendChild(subtitle1);
            spotlight1.appendChild(image1);
            spotlight1.appendChild(contact1);

            displayMembers.splice(i,1);

        });

    });

// function displayspotlight (npb_business) {
//     let spotlight1 = document.querySelector(".spotlight")
//     let title1 = document.createElement("h2")
//     let subtitle1 = document.createElement("h3")
//     let image1 = document.createElement("img")
//     let contact1 = document.createElement("p")

//     // let name1 = npb_businesses.name [Math.floor(Math.random() * 12)]

//     title1.textContent = `${name1}`;
//     subtitle1.textContent = `${npb_business.subtitle}`;
//     contact1.innerHTML = `${npb_business.website} <br> ${npb_business.phone}`;

//     image1.setAttribute("src", npb_business.clipart);
//     image1.setAttribute("alt", `clipart for ${npb_business.name}`)
//     image1.setAttribute("loading", "lazy");

//     spotlight1.appendChild(title1);
//     spotlight1.appendChild(subtitle1);
//     spotlight1.appendChild(image1);
//     spotlight1.appendChild(contact1);

// }