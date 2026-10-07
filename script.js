// ============================
// TYPING EFFECT
// ============================

const words = [
    "Web Developer",
    "RPL Student",
    "Frontend Learner",
    "Creative Coder"
];

const typing = document.getElementById("typing");

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const word = words[wordIndex];

    if (!deleting) {

        typing.textContent = word.substring(
            0,
            charIndex + 1
        );

        charIndex++;

        if (charIndex === word.length) {

            deleting = true;

            setTimeout(typeEffect, 1300);

            return;
        }

    } else {

        typing.textContent = word.substring(
            0,
            charIndex - 1
        );

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {
                wordIndex = 0;
            }

        }

    }

    setTimeout(
        typeEffect,
        deleting ? 60 : 100
    );

}

typeEffect();


// ============================
// MOBILE MENU
// ============================

const menuBtn = document.querySelector(".menu-btn");
const navMenu = document.querySelector(".nav-menu");

menuBtn.addEventListener("click", function () {

    navMenu.classList.toggle("active");

});


// Close menu after clicking navigation

document.querySelectorAll(".nav-menu a").forEach(link => {

    link.addEventListener("click", function () {

        navMenu.classList.remove("active");

    });

});


// ============================
// MOUSE PARALLAX
// ============================

const heroArt = document.querySelector(".hero-art");

document.addEventListener("mousemove", function(e) {

    if (window.innerWidth <= 800) return;

    const x = (window.innerWidth / 2 - e.clientX) / 40;
    const y = (window.innerHeight / 2 - e.clientY) / 40;

    heroArt.style.transform =
        `translate(${x}px, ${y}px)`;

});


// ============================
// SCROLL REVEAL
// ============================

const elements = document.querySelectorAll(
    ".skill-card, .project-card, .certificate-card, .about, .contact-box"
);

const observer = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },

    {
        threshold: 0.1
    }

);


elements.forEach(element => {

    element.classList.add("reveal");

    observer.observe(element);

});
function openCertificate(certificate) {

    const modal = document.getElementById("certificateModal");
    const image = document.getElementById("certificateModalImage");

    if (certificate === "certificate1") {
        image.src = "images/sertifikat.png";
    }

    if (certificate === "certificate2") {
        image.src = "images/sertifikat2.jpeg";
    }

    modal.classList.add("active");
}


function closeCertificate() {

    const modal = document.getElementById("certificateModal");

    modal.classList.remove("active");
}


// Klik area luar untuk menutup
document.getElementById("certificateModal").addEventListener("click", function(e) {

    if (e.target === this) {
        closeCertificate();
    }

});

