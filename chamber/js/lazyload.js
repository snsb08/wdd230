const imagesToLoad = document.querySelectorAll("[data-src]");

function loadingImages(img) {
    const src = img.getAttribute("data-src");
    if(!src) {
        return;
    }
    img.setAttribute("src", src);
}

const imgOptions = {
    threshold: 1,
    rootMargin: "0px 0px 300px 0px"
    
};

const imgObserver = new IntersectionObserver ((entries, imgObserver) => {
    entries.forEach(entry =>{
        if (!entry.isIntersecting) {
            return;
        } else {
            loadingImages(entry.target);
            imgObserver.unobserve(entry.target);
        }
    })
}, imgOptions);

imagesToLoad.forEach (image => {
    imgObserver.observe(image);
    loadingImages(image);
})
// console.log(imagesToLoad);




// const imgOptions = {
//     threshold: 1,
//     rootMargin: "0px 0px 50px 0px"
// };

// const loadingImages = (image) => {
//     image.setAttribute('src', image.getAttribute('data-src'));
//     image.onload = () => {image.removeAttribute('data-src');}; 
// };

// if('IntersectionObserver' in window) {
//     const imgObserver = new IntersectionObserver((items, imgObserver) => {
//         items.forEach((item) => {
//             if (item.isInsersecting) {
//             loadingImages(item.target);
//             imgObserver.unobserve(item.target);}
//         });
//     }, imgOptions);

//     //loop through each img
//     imagesToLoad.forEach((img) => {
//         imgObserver.observe(img);
//     });


// }
// else {
//     //just load All images if not supported
//     imagesToLoad.forEach((img) => {
//         loadingImages(img);
//     });
// }