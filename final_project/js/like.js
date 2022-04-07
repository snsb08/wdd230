const likeBtn = document.querySelector(".like_btn");
let likeIcon = document.querySelector("#icon");
let count = document.querySelector("#count");

let clicked = false;
//button clicked
likeBtn.addEventListener("click", () => {
    if (!clicked) {
        clicked = true;
        likeIcon.innerHTML = ``; //add image of thumbs up?
        count.textContent++;
    }
    else {
        clicked = false;
        likeIcon.innerHTML = `<i class="thumbsUp"></i>`
        count.textContent--;
    }
})