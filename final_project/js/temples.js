//temples data json

const data = "temples.json";
const cards = document.querySelector(".temple_cards");
// const storeLiked = window.localStorage.getItem("storeLiked");

fetch(data)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        // console.table (jsonObject); //do I need this?
        let temples = jsonObject['temples'];
        
        temples.forEach(displayTempleInfo);
       
    })

function displayTempleInfo (displayTemple) {
    let card = document.createElement("section");
    let name = document.createElement("h2");
    let address = document.createElement("p");
    let phone = document.createElement("p");
    let email = document.createElement("p");
    let services = document.createElement("p");
    let history = document.createElement("p");
    let ordinances = document.createElement("p");
    let session = document.createElement("p");
    let closure = document.createElement("p");
    let photo = document.createElement("img");
    let likeIt = document.createElement("button");
    let thumbUp = document.createElement("span");
    let countSpan = document.createElement("span");
    let like = document.createElement("p");
    

    name.textContent = `${displayTemple.name}`;
    address.innerHTML = `${displayTemple.address}`;
    phone.innerHTML = `${displayTemple.telephone}`;
    email.innerHTML = `${displayTemple.email}`;
    services.innerHTML = `${displayTemple.services}`;
    history.innerHTML = `${displayTemple.history}`;
    ordinances.innerHTML = `${displayTemple.ordinance}`;
    session.innerHTML = `${displayTemple.session}`;
    closure.innerHTML = `${displayTemple.closure}`;
    
    thumbUp.innerHTML = `thumb_up`;
    countSpan.innerHTML = ` 0 `;
    like.innerHTML = `Like`;
    

    

    

    photo.setAttribute("src", displayTemple.photo);
    photo.setAttribute("alt", `picture of the ${displayTemple.name}`);
    // photo.setAttribute("loading", "lazy");
    likeIt.setAttribute("class", "like_btn");
    thumbUp.setAttribute("class", "likeIcon")
    countSpan.setAttribute("class", "count");

    // likeIt.innerHTML = `${thumbUp} ${countSpan} Like`;
    likeIt.appendChild(thumbUp);
    likeIt.appendChild(countSpan);
    // likeIt.appendChild(like);
    
    

    card.appendChild(name);
    card.appendChild(likeIt);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(email);
    card.appendChild(services);
    card.appendChild(history);
    card.appendChild(ordinances);
    card.appendChild(session);
    card.appendChild(closure);
    card.appendChild(photo);

    cards.appendChild(card);

    let clicked = false;
//button clicked
    likeIt.addEventListener("click", () => {
        if (!clicked) {
            clicked = true;
            // likeIcon.innerHTML = `thumb_up`;
            // likeIcon.classList.add("liked");
            thumbUp.setAttribute("class", "liked");
            countSpan.textContent++;
            localStorage.setItem('likeIt', "liked" );
            
        } else if (localStorage == "liked") {
            clicked = true;
            // likeIcon.innerHTML = `thumb_up`;
            // likeIcon.classList.add("liked");
            thumbUp.setAttribute("class", "liked");
            
        }
        else {
            clicked = false;
            // likeIcon.classList.remove("liked");
            thumbUp.setAttribute("class", "unliked");
            countSpan.textContent--;
            localStorage.removeItem('likeIt');
        }
    });

};

//Like Button:

// let likeBtn = document.querySelector(".like_btn");
// let likeIcon = document.querySelector(".likeIcon");
// let count = document.querySelector(".count");

// let clicked = false;
// //button clicked
// likeBtn.addEventListener("click", () => {
//     if (!clicked) {
//         clicked = true;
//         // likeIcon.innerHTML = `thumb_up`;
//         likeIcon.classList.add("liked");
//         count.textContent++;
//     }
//     else {
//         clicked = false;
//         likeIcon.classList.remove("liked");
//         count.textContent--;
//     }
// });

// let likeBtn2 = document.querySelector(".like_btn2");
// let likeIcon2 = document.querySelector(".likeIcon2");
// let count2 = document.querySelector(".count2");

// let clicked2 = false;

// likeBtn2.addEventListener("click2", () => {
//     if (!clicked2) {
//         clicked2 = true;
//         // likeIcon.innerHTML = `thumb_up`;
//         likeIcon2.classList.add("liked2");
//         count2.textContent++;
//     }
//     else {
//         clicked2 = false;
//         likeIcon2.classList.remove("liked2");
//         count2.textContent--;
//     }
// });