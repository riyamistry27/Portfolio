// ===============================
// MOBILE MENU
// ===============================

const menuBtn = document.querySelector(".menu-btn");
const navbar = document.querySelector(".navbar");

if(menuBtn){

    menuBtn.addEventListener("click",()=>{

        navbar.classList.toggle("active");

    });

}


// ===============================
// CLOSE MENU AFTER CLICK
// ===============================

const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach(link=>{

    link.addEventListener("click",()=>{

        navbar.classList.remove("active");

    });

});


// ===============================
// ACTIVE NAVIGATION ON SCROLL
// ===============================

const sections = document.querySelectorAll("section");

window.addEventListener("scroll",()=>{

    let current = "";

    sections.forEach(section=>{

        const sectionTop = section.offsetTop - 120;

        if(pageYOffset >= sectionTop){

            current = section.getAttribute("id");

        }

    });


    navLinks.forEach(link=>{

        link.classList.remove("active");


        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active");

        }

    });


});


// ===============================
// IMAGE LOAD ANIMATION
// ===============================

window.addEventListener("load",()=>{

    document.body.classList.add("loaded");

});


// ===============================
// CONTACT FORM DEMO
// ===============================

const contactForm = document.querySelector(".contact-form");


if(contactForm){

    contactForm.addEventListener("submit",(e)=>{

        e.preventDefault();

        alert("Thank you! Your message has been received.");

        contactForm.reset();

    });

}

// ===============================
// HEADER SCROLL EFFECT
// ===============================

const header = document.querySelector(".header");


window.addEventListener("scroll",()=>{


    if(window.scrollY > 50){

        header.classList.add("scrolled");

    }

    else{

        header.classList.remove("scrolled");

    }


});



// ===============================
// SCROLL REVEAL
// ===============================


const revealElements = document.querySelectorAll(
    ".section, .skill-card, .project-card, .certificate-card"
);



function revealOnScroll(){

    revealElements.forEach(element=>{


        const windowHeight = window.innerHeight;

        const elementTop = element.getBoundingClientRect().top;


        if(elementTop < windowHeight - 100){

            element.classList.add("reveal");

            setTimeout(()=>{

                element.classList.add("active");

            },100);

        }


    });


}


window.addEventListener(
    "scroll",
    revealOnScroll
);


revealOnScroll();