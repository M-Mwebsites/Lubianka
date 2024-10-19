(function () {
    "use strict";

    //Easy selector helper function
    const select = (el, all = false) => {
        el = el.trim()
        if (all) {
            return [...document.querySelectorAll(el)]
        } else {
            return document.querySelector(el)
        }
    }

    //Easy on scroll event listener
    const onscroll = (el, listener) => {
        el.addEventListener('scroll', listener)
    }

    //Toggle .header-scrolled class to #header when page is scrolled
    let selectHeader = select('#header')
    if (selectHeader) {
        let header = document.getElementById('header');
        let headerLogo = document.getElementById('header-logo');
        let headerLogoImg = document.getElementById('header-logo-image');
        const headerScrolled = () => {
            if (window.scrollY > 150) {
                header.style.height = "13vh";
                header.style.backgroundColor = "rgba(39,37,32,0.9)";
                headerLogoImg.style.width = "9vh";
            }
            else {
                header.style.height = "15vh";
                header.style.backgroundColor = "transparent";
                headerLogo.style.alignSelf = "center";
                headerLogoImg.style.width = "12vh";
            }
        }
        window.addEventListener('load', headerScrolled)
        onscroll(document, headerScrolled)
    }

    //Animation on scroll
    window.addEventListener('load', () => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true,
            mirror: false
        })
    });
})()

//Footer year
var dateObj = new Date();
var y = dateObj.getUTCFullYear();
document.getElementById("footerYear").innerText = y;

//Smooth scroll
const isTouchDevice = 'ontouchstart' in document.documentElement;
disableScroll();
if (!isTouchDevice) smoothScroll();
window.onresize = () => {
    resizeBodyHeight();
};
window.onload = () => {
    enableScroll();
    resizeBodyHeight();
};
function disableScroll() {
    document.body.style.overflow = 'hidden';
}
function enableScroll() {
    document.body.style.overflow = '';
}
function smoothScroll() {
    document.querySelector('.viewport').classList.add('SmoothScroll');
    new SmoothScroll({
        target: document.querySelector('.container'),
        scrollEase: 0.08,
        maxOffset: 500,
    });
}
function resizeBodyHeight() {
    document.body.style.height = document.querySelector('.viewport').scrollHeight + 'px';
}

//Links click scrolling
document.addEventListener("DOMContentLoaded", function () {
    const aboutLink = document.querySelector('a[href="#about"]');
    const header = document.getElementById("header");
    aboutLink.addEventListener("click", function (e) {
        e.preventDefault();
        const targetSection = document.querySelector(this.getAttribute("href"));
        if (targetSection) {
            let offset = targetSection.offsetTop - header.offsetHeight;
            window.scroll({
                top: offset,
                behavior: "smooth"
            });
            setTimeout(function() {
                offset = targetSection.offsetTop - header.offsetHeight;
                window.scroll({
                    top: offset,
                    behavior: "smooth"
                });
            }, 700);
        }
    });
    const servicesLink = document.querySelector('a[href="#services"]');
    servicesLink.addEventListener("click", function (e) {
        e.preventDefault();
        const targetSection = document.querySelector(this.getAttribute("href"));
        if (targetSection) {
            const offset = targetSection.offsetTop - header.offsetHeight - 50;
            window.scroll({
                top: offset,
                behavior: "smooth"
            });
        }
    });
    const arealLink = document.querySelector('a[href="#areal"]');
    arealLink.addEventListener("click", function (e) {
        e.preventDefault();
        const targetSection = document.querySelector(this.getAttribute("href"));
        if (targetSection) {
            const offset = targetSection.offsetTop - header.offsetHeight - 50;
            window.scroll({
                top: offset,
                behavior: "smooth"
            });
        }
    });
    const contactLinks = document.querySelectorAll('a[href="#contact"]');
    contactLinks.forEach(function(contactLink) {
        contactLink.addEventListener("click", function(e) {
            e.preventDefault();
            const targetSection = document.querySelector(this.getAttribute("href"));
            if (targetSection) {
                const offset = targetSection.offsetTop;
                window.scroll({
                    top: offset,
                    behavior: "smooth"
                });
            }
        });
    });
});






//modal
var modal = document.getElementById("modal");
var modalImg = document.getElementById("modal-img");
var galleryImages = document.querySelectorAll("#gallery img");
var closeBtn = document.querySelector(".modal .close");
var prevBtn = document.querySelector(".modal .prev");
var nextBtn = document.querySelector(".modal .next");
var currentIndex = 0;

function openModal(index) {
    currentIndex = index;
    modal.style.display = "block";
    let imgSrc = galleryImages[currentIndex].src;
    let lastSlashIndex = imgSrc.lastIndexOf('/');
    let modifiedSrc = imgSrc.slice(0, lastSlashIndex + 1) + 'large/' + imgSrc.slice(lastSlashIndex + 1);
    modalImg.src = modifiedSrc;
}

galleryImages.forEach(function(img, index) {
    img.onclick = function() {
        openModal(index);
    }
});

closeBtn.onclick = function() {
    modal.style.display = "none";
};

prevBtn.onclick = function() {
    currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    let imgSrc = galleryImages[currentIndex].src;
    let lastSlashIndex = imgSrc.lastIndexOf('/');
    let modifiedSrc = imgSrc.slice(0, lastSlashIndex + 1) + 'large/' + imgSrc.slice(lastSlashIndex + 1);
    modalImg.src = modifiedSrc;
};

nextBtn.onclick = function() {
    currentIndex = (currentIndex + 1) % galleryImages.length;
    let imgSrc = galleryImages[currentIndex].src;
    let lastSlashIndex = imgSrc.lastIndexOf('/');
    let modifiedSrc = imgSrc.slice(0, lastSlashIndex + 1) + 'large/' + imgSrc.slice(lastSlashIndex + 1);
    modalImg.src = modifiedSrc;
};

modal.onclick = function(e) {
    if (e.target === modal) {
        modal.style.display = "none";
    }
};


document.onreadystatechange = function () {
    if (document.readyState == 'complete') {
        const loadingElement = document.getElementById('loading');
        loadingElement.style.opacity = "0";
        loadingElement.style.visibility = "hidden";
    }
}



const slidesContainer = document.querySelector('.slides-container');
const reviews = document.querySelectorAll('.review');
const leftArrow = document.querySelector('.arrow-left');
const rightArrow = document.querySelector('.arrow-right');
let currentReview = 0;

function showReview(index) {
    currentReview = (index + reviews.length) % reviews.length; // ensures index wraps around
    const offset = -currentReview * 100; // calculate offset for sliding
    slidesContainer.style.transform = `translateX(${offset}%)`;
}

// Event listeners for the arrows
leftArrow.addEventListener('click', () => showReview(currentReview - 1));
rightArrow.addEventListener('click', () => showReview(currentReview + 1));

