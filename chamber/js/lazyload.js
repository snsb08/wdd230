let imagesToLoad = document.querySelectorAll('img[data-src]');

const imgOptions = {
    threshold: 1,
    rootMargin: '0px 0px 100px 0px'
};

const loadingImages = (image) => {
    image.setAttribute("src", image.getAttribute('data-src'));
    image.onload = () => {
        image.removeAttribute('data-src');
    }; 
};

if('IntersectionObserver' in window) {
    const imgObserver = new IntersectionObserver((items, observer) => {
        items.forEach((item) => {
            if(item.isIntersecting) {
              loadingImages(item.target);
              observer.unobserve(item.target);
            }
        });
    }, imgOptions);


    imagesToLoad.forEach((img) => {
      imgObserver.observe(img);
    });
  } else {
    imagesToLoad.forEach((img) => {
      loadingImages(img);
    });
  }



// function loadingImages(img) {
//     const src = img.getAttribute("data-src");
//     if(!src) {
//         return;
//     }
//     img.setAttribute("src", src);
// };

// const imgOptions = {
//     threshold: 1,
//     rootMargin: "0px 0px 30px 0px"
    
// };

// const imgObserver = new IntersectionObserver ((entries, imgObserver) => {
//     entries.forEach(entry =>{
//         if (!entry.isIntersecting) {
//             return;
//         } else {
//             loadingImages(entry.target);
//             imgObserver.unobserve(entry.target);
//         }
//     })
// }, imgOptions)

// imagesToLoad.forEach (image => {
//     imgObserver.observe(image);
//     loadingImages(image);
// });

// console.log(imagesToLoad);


