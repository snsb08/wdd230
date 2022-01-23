let date = new Date();
let year = date.getFullYear();
document.getElementById('currentYear').innerHTML = "\u00A9" + year + " .*| Sheyla N. Norton |*. Florida";

let date_updated = document.lastModified;

let lastModif = new Date(document.lastModified);


const dateModified = document.querySelector("#dateModified");
dateModified.textContent =" Last Updated:" + document.lastModified;