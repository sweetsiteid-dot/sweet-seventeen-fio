/* =========================================
   OPEN INVITATION
========================================= */

const opening = document.getElementById("opening");
const mainContent = document.getElementById("mainContent");
const openBtn = document.getElementById("openBtn");
const music = document.getElementById("bgMusic");
const particles = document.getElementById("particles");

openBtn.addEventListener("click", () => {

    music.volume = 0.7;

    music.play().catch(() => {});

    createParticles();

    opening.classList.add("hide");

    setTimeout(() => {

        mainContent.classList.add("show");

        opening.style.display = "none";

    }, 900);

});


/* =========================================
   FALLING EFFECT
========================================= */

const icons = [

    "🤍",
    "✨",
    "⭐",
    "♡"

];

function createParticles(){

    for(let i = 0; i < 80; i++){

        const item = document.createElement("span");

        item.classList.add("fall-item");

        item.innerHTML = icons[Math.floor(Math.random()*icons.length)];

        item.style.left = Math.random()*100 + "vw";

        item.style.fontSize = (Math.random()*18 + 16) + "px";

        item.style.animationDuration = (Math.random()*2 + 3) + "s";

        item.style.opacity = Math.random();

        particles.appendChild(item);

        setTimeout(()=>{

            item.remove();

        },5000);

    }

}


/* =========================================
   COUNTDOWN
========================================= */

const days = document.getElementById("days");

const hours = document.getElementById("hours");

const minutes = document.getElementById("minutes");

const seconds = document.getElementById("seconds");


const targetDate = new Date(

"February 27, 2027 17:00:00"

).getTime();


function updateCountdown(){

    const now = new Date().getTime();

    const distance = targetDate - now;


    if(distance <= 0){

        days.textContent = "00";
        hours.textContent = "00";
        minutes.textContent = "00";
        seconds.textContent = "00";

        return;

    }


    const d = Math.floor(

        distance / (1000 * 60 * 60 * 24)

    );

    const h = Math.floor(

        (distance % (1000*60*60*24)) /

        (1000*60*60)

    );

    const m = Math.floor(

        (distance % (1000*60*60)) /

        (1000*60)

    );

    const s = Math.floor(

        (distance % (1000*60)) /

        1000

    );


    days.textContent = String(d).padStart(2,"0");

    hours.textContent = String(h).padStart(2,"0");

    minutes.textContent = String(m).padStart(2,"0");

    seconds.textContent = String(s).padStart(2,"0");

}

updateCountdown();

setInterval(updateCountdown,1000);

/* =========================================
   PHOTO SLIDER
========================================= */

const slides = document.querySelector(".slides");
const slide = document.querySelectorAll(".slide");

const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

const dots = document.querySelectorAll(".dot");

let currentSlide = 0;

let autoSlide;


/* =========================================
   SHOW SLIDE
========================================= */

function showSlide(index){

    if(index >= slide.length){

        currentSlide = 0;

    }else if(index < 0){

        currentSlide = slide.length - 1;

    }else{

        currentSlide = index;

    }

    slides.style.transform =
    `translateX(-${currentSlide * 100}%)`;

    dots.forEach(dot=>{

        dot.classList.remove("active");

    });

    dots[currentSlide].classList.add("active");

}


/* =========================================
   NEXT BUTTON
========================================= */

nextBtn.addEventListener("click",()=>{

    showSlide(currentSlide + 1);

    restartAutoSlide();

});


/* =========================================
   PREVIOUS BUTTON
========================================= */

prevBtn.addEventListener("click",()=>{

    showSlide(currentSlide - 1);

    restartAutoSlide();

});


/* =========================================
   DOTS
========================================= */

dots.forEach((dot,index)=>{

    dot.addEventListener("click",()=>{

        showSlide(index);

        restartAutoSlide();

    });

});


/* =========================================
   AUTO SLIDE
========================================= */

function startAutoSlide(){

    autoSlide = setInterval(()=>{

        showSlide(currentSlide + 1);

    },4000);

}

function restartAutoSlide(){

    clearInterval(autoSlide);

    startAutoSlide();

}

startAutoSlide();


/* =========================================
   TOUCH SWIPE
========================================= */

const slider = document.querySelector(".slider");

let startX = 0;

let endX = 0;

slider.addEventListener("touchstart",(e)=>{

    startX = e.touches[0].clientX;

});

slider.addEventListener("touchmove",(e)=>{

    endX = e.touches[0].clientX;

});

slider.addEventListener("touchend",()=>{

    if(startX - endX > 50){

        showSlide(currentSlide + 1);

        restartAutoSlide();

    }

    if(endX - startX > 50){

        showSlide(currentSlide - 1);

        restartAutoSlide();

    }

});


/* =========================================
   INITIAL
========================================= */

showSlide(0);

/* =========================================
   SCROLL REVEAL ANIMATION
========================================= */

const revealElements = document.querySelectorAll(
    "section, .letter-card, .location-card, .dress-card, .slider-container"
);

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

            observer.unobserve(entry.target);

        }

    });

}, {
    threshold: 0.15
});

revealElements.forEach(el => {

    if (!el.classList.contains("hero")) {

        el.style.opacity = "0";
        el.style.transform = "translateY(40px)";
        el.style.transition = "all .8s ease";

        observer.observe(el);

    }

});


/* =========================================
   PREVENT IMAGE DRAG
========================================= */

document.querySelectorAll("img").forEach(img => {

    img.setAttribute("draggable", "false");

});


/* =========================================
   BUTTON CLICK EFFECT
========================================= */

document.querySelectorAll("button").forEach(button => {

    button.addEventListener("click", function () {

        this.style.transform = "scale(.96)";

        setTimeout(() => {

            this.style.transform = "";

        }, 120);

    });

});


/* =========================================
   AUTO PAUSE MUSIC
========================================= */

document.addEventListener("visibilitychange", () => {

    if (!music) return;

    if (document.hidden) {

        music.pause();

    } else {

        music.play().catch(() => {});

    }

});


/* =========================================
   FINISH
========================================= */

console.log("Sweet Seventeen Invitation by Danial 🤍");

/* =========================================
   FLOATING HEART BACKGROUND
========================================= */

function createFloatingHeart(){

    const heart=document.createElement("span");

    heart.className="bg-heart";

    const icons=["♡","♥"];

    heart.innerHTML=icons[Math.floor(Math.random()*icons.length)];

    heart.style.left=Math.random()*100+"vw";

    heart.style.fontSize=(Math.random()*22+12)+"px";

    heart.style.animationDuration=(Math.random()*8+12)+"s";

    document.body.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },20000);

}

setInterval(createFloatingHeart,700);
