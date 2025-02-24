gsap.registerPlugin(ScrollTrigger);

gsap.to(".content", { opacity: 1, top: 150, duration: 2 });
gsap.to(".content-sale img", {
    opacity: 1,
    y: 10,
    duration: 2,
    scrollTrigger: {
        trigger: ".content-sale img",
        scrub: 1.5,
        start: "top center",
        end: "center center"
    },

});

gsap.to(".content-sale-text", {
    opacity: 1,
    duration: 2,
    delay: 3,
    scrollTrigger: {
        trigger: ".content-sale-text",
        scrub: true,
        start: "top center",
        end: "center center"
    },

});

gsap.to(".content-comfort-text", {
    opacity: 1,
    y: 10,
    duration: 2,
    scrollTrigger: {
        trigger: ".content-comfort-text",
        scrub: 1.5,
        start: "top center",
        end: "center center"
    },

});

gsap.to(".content-comfort", {
    opacity: 1,
    x: 10,
    duration: 2,
    scrollTrigger: {
        trigger: ".content-comfort",
        scrub: 1.5,
        start: "top center",
        end: "center center"
    },

});

gsap.to(".content-comfort img", {
    opacity: 1,
    x: 20,
    duration: 2,
    scrollTrigger: {
        trigger: ".content-comfort img",
        scrub: 1.5,
        start: "top center",
        end: "center center"
    },

});



let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}


