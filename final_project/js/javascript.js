// Navigation:
function toggleMenu () {
    document.getElementById("navList").classList.toggle("open");
    document.getElementById("hamburguerBtn").classList.toggle("open");
}

const x= document.getElementById('hamburguerBtn');
x.onclick = toggleMenu;


//last modified:

let date_updated = document.lastModified;

let lastModif = new Date(document.lastModified);


const dateModified = document.querySelector("#dateModified");
dateModified.textContent =" Last Updated:" + document.lastModified;