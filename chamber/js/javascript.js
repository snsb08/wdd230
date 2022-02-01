

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