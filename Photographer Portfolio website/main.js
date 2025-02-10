// change nav style on scroll
window.addEventListener('scroll', () => {
    // we want to select the nav element and toggle it class to another class
    // if window is scrolled
    document.querySelector('nav').classList.toggle('window-scrolled', window.scrollY > 0);

})



// Big image and small image hover transition.
const bigImg = document.querySelector('.header__image-lg');
const smallImg = document.querySelector('.header__image-sm');

// add event listener for hover on smallImg
smallImg.addEventListener('mouseover', () => {
    bigImg.style.filter = "saturate(1) brightness(1)";
    bigImg.style.top = "0";
    bigImg.style.left = "0";
    bigImg.style.border = "1rem solid #012734"
    smallImg.style.opacity = "0";

})

smallImg.addEventListener('mouseout', () => {
    bigImg.style.filter = "saturate(0) brightness(0.3)";
    bigImg.style.top = "1rem";
    bigImg.style.left = "1rem";
    bigImg.style.border = "none"
    smallImg.style.opacity = "1";
})







// CONTACTS BTNS (CIRCULAR BTNS)
const textButton = document.querySelector('.contact__btn');

let text = textButton.querySelector('p');

text.innerHTML = text.innerHTML.split('').map((character, index) => `<span style="transform: 
    rotate(${index * 12}deg)">${character}</span>`).join('');


// for the second one
const textButton2 = document.querySelector('.about__btn');
let text2 = textButton2.querySelector('p');

text2.innerHTML = text2.innerHTML.split('').map((character, index) => `<span style="transform: 
    rotate(${index * 12}deg)">${character}</span>`).join('');

// for the second one
const textButton3 = document.querySelector('.exhibitions__btn');
let text3 = textButton3.querySelector('p');

text3.innerHTML = text3.innerHTML.split('').map((character, index) => `<span style="transform: 
    rotate(${index * 12}deg)">${character}</span>`).join('');





// Big image for about section and small image hover transition
const bigImgAbout = document.querySelector('.about__image-lg');
const smallImgAbout = document.querySelector('.about__image-sm');

// add event listener for hover on smallImg
smallImgAbout.addEventListener('mouseover', () => {
    bigImgAbout.style.filter = "saturate(1) brightness(1)";
    bigImgAbout.style.top = "0";
    bigImgAbout.style.left = "0";
    bigImgAbout.style.border = "1rem solid #85a2b2";
    bigImgAbout.style.boxShadow = "0 3rem 3rem rgba(0,0,0,.2)";
    smallImgAbout.style.opacity = "0";

})

// on mouse out
smallImgAbout.addEventListener('mouseout', () => {
    bigImgAbout.style.filter = "saturate(0) brightness(0.3)";
    bigImgAbout.style.top = "1rem";
    bigImgAbout.style.left = "1rem";
    bigImgAbout.style.border = "none"
    bigImgAbout.style.boxShadow = "none";
    smallImgAbout.style.opacity = "1";
})




// SWIPER JS (GALLERY SECTION)
var swiper = new Swiper('.mySwiper', {
    slidesPerView: 3,
    spaceBetween: 20,
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
    // For responsiveness: on Tap device, we want the slides per view to be 2
    breakpoints: {
        599: {
            slidesPerView: 2,
            spaceBetween: 40
        },
        // for large devices like desktop:
        1000: {
            slidesPerView: 3,
            spaceBetween: 60
        },
        430: {
            slidesPerView: 1,
            spaceBetween: 40
        },
    }
})






// Toggle nav functionallities
const nav = document.querySelector('.nav__links')
const openNavBtn = document.querySelector('#toggle-open')
const closeNavBtn = document.querySelector('#toggle-close')


const openNav = () => {
    nav.style.display = "flex";
    openNavBtn.style.display = "none"
    closeNavBtn.style.display = "inline-block"
}

const closeNav = () => {
    nav.style.display = "none";
    openNavBtn.style.display = "inline-block"
    closeNavBtn.style.display = "none"
}

openNavBtn.addEventListener('click', openNav)
closeNavBtn.addEventListener('click', closeNav)

nav.querySelectorAll("li a").forEach(navLink => {
    navLink.addEventListener('click', (event) => {
        if (window.innerWidth < 1000) {
            closeNav();
        }
    });
});

