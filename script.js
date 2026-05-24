
// =========================
// NAVBAR BACKGROUND EFFECT
// =========================

window.addEventListener("scroll", () => {

    const nav = document.querySelector("nav");

    if(nav){

        if(window.scrollY > 50){

            nav.style.background = "rgba(0,0,0,0.85)";

        }

        else{

            nav.style.background = "rgba(0,0,0,0.45)";

        }

    }

});


// =========================
// SCROLL REVEAL ANIMATION
// =========================

const revealElements =
document.querySelectorAll(".reveal");

const revealObserver =
new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("active");

        }

    });

},{
    threshold:0.15
});

revealElements.forEach(el => {

    revealObserver.observe(el);

});


// =========================
// BUTTON HOVER EFFECT
// =========================

const buttons =
document.querySelectorAll(
"button, .btn, .btn-outline, .portfolio-btn"
);

buttons.forEach(btn => {

    btn.addEventListener("mouseenter", () => {

        btn.style.transform = "scale(1.05)";

    });

    btn.addEventListener("mouseleave", () => {

        btn.style.transform = "scale(1)";

    });

});


// =========================
// HERO ANIMATION
// =========================

window.addEventListener("load", () => {

    const heroTitle =
    document.querySelector(".hero-content h1");

    const heroText =
    document.querySelector(".hero-content p");

    const heroButtons =
    document.querySelector(".hero-buttons");

    // TITLE

    if(heroTitle){

        heroTitle.style.opacity = "0";
        heroTitle.style.transform = "translateY(40px)";
        heroTitle.style.filter = "blur(10px)";

        setTimeout(() => {

            heroTitle.style.transition = "1.8s ease";

            heroTitle.style.opacity = "1";

            heroTitle.style.transform =
            "translateY(0px)";

            heroTitle.style.filter = "blur(0px)";

        },300);

    }

    // TEXT

    if(heroText){

        heroText.style.opacity = "0";

        heroText.style.transform =
        "translateY(30px)";

        setTimeout(() => {

            heroText.style.transition = "1.5s ease";

            heroText.style.opacity = "1";

            heroText.style.transform =
            "translateY(0px)";

        },900);

    }

    // BUTTONS

    if(heroButtons){

        heroButtons.style.opacity = "0";

        setTimeout(() => {

            heroButtons.style.transition = "1.5s ease";

            heroButtons.style.opacity = "1";

        },1400);

    }

});


// =========================
// LIGHTBOX
// =========================

let images =
Array.from(
document.querySelectorAll(".item img")
);

let currentIndex = 0;

function openImg(img){

    const lightbox =
    document.getElementById("lightbox");

    const lightboxImg =
    document.getElementById("lightbox-img");

    if(lightbox && lightboxImg){

        lightbox.style.display = "flex";

        lightboxImg.src = img.src;

        currentIndex = images.indexOf(img);

    }

}

function closeImg(){

    const lightbox =
    document.getElementById("lightbox");

    if(lightbox){

        lightbox.style.display = "none";

    }

}

function nextImg(){

    const lightboxImg =
    document.getElementById("lightbox-img");

    if(lightboxImg && images.length > 0){

        currentIndex =
        (currentIndex + 1) % images.length;

        lightboxImg.src =
        images[currentIndex].src;

    }

}

function prevImg(){

    const lightboxImg =
    document.getElementById("lightbox-img");

    if(lightboxImg && images.length > 0){

        currentIndex =
        (currentIndex - 1 + images.length)
        % images.length;

        lightboxImg.src =
        images[currentIndex].src;

    }

}


// =========================
// FILTER SYSTEM
// =========================

function filter(category){

    const items =
    document.querySelectorAll(".item");

    items.forEach(item => {

        if(
            category === "all" ||
            item.classList.contains(category)
        ){

            item.style.display = "block";

        }

        else{

            item.style.display = "none";

        }

    });

}


// =========================
// PAGE TRANSITION
// =========================

document.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", function(e){

        const href =
        this.getAttribute("href");

        if(
            !href ||
            href.startsWith("#")
        ) return;

        e.preventDefault();

        document.body.classList.add("fade-out");

        setTimeout(() => {

            window.location.href = href;

        },400);

    });

});


// =========================
// CONTACT FORM
// =========================

const form =
document.querySelector(".contact-form form");

if(form){

    form.addEventListener("submit", () => {

        const btn =
        form.querySelector("button");

        if(btn){

            btn.innerHTML =
            "Sending Message...";

            btn.style.background =
            "#ffffff";

            btn.style.color =
            "#000";

        }

    });

}


// =========================
// ABOUT PAGE ANIMATION
// =========================

const aboutElements =
document.querySelectorAll(
".about-image, .about-content, .stat-box, .floating-card"
);

const aboutObserver =
new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.style.opacity = "1";

            entry.target.style.transform =
            "translateY(0px)";

        }

    });

},{
    threshold:0.2
});

aboutElements.forEach(el => {

    el.style.opacity = "0";

    el.style.transform =
    "translateY(60px)";

    el.style.transition =
    "1s ease";

    aboutObserver.observe(el);

});


// =========================
// MODAL SYSTEM
// =========================

const modal =
document.getElementById("bookingModal");

const openButtons =
document.querySelectorAll(".openModal");

const closeBtn =
document.querySelector(".close-btn");

if(modal){

    openButtons.forEach(button => {

        button.addEventListener("click", () => {

            modal.style.display = "flex";

        });

    });

    if(closeBtn){

        closeBtn.addEventListener("click", () => {

            modal.style.display = "none";

        });

    }

    window.addEventListener("click", (e) => {

        if(e.target === modal){

            modal.style.display = "none";

        }

    });

}


// =========================
// PAYMENT SECTION
// =========================

function showPayment(amount){

    const paymentBox =
    document.getElementById("paymentBox");

    const paymentAmount =
    document.getElementById("paymentAmount");

    if(paymentBox){

        paymentBox.style.display = "block";

    }

    if(paymentAmount){

        paymentAmount.innerText =
        "Amount To Pay: ₹" + amount;

    }

}


// =========================
// AUDIO SYSTEM
// =========================

let audio =
new Audio("audio/ambient.mp3");

audio.loop = true;

function toggleSound(){

    if(audio.paused){

        audio.play();

    }

    else{

        audio.pause();

    }

}


// =========================
// AUTO PAUSE VIDEOS
// =========================

const allVideos =
document.querySelectorAll("video");

allVideos.forEach(video => {

    video.addEventListener("play", () => {

        allVideos.forEach(otherVideo => {

            if(otherVideo !== video){

                otherVideo.pause();

            }

        });

    });

});


// =========================
// PORTFOLIO LOCK FIX
// =========================

if(document.body.classList.contains(
"portfolio-page"
)){

    document.body.classList.remove(
    "portfolio-lock"
    );

}

// =========================
// PORTFOLIO MUSIC
// =========================

const portfolioMusic =
document.getElementById("portfolioMusic");

const musicButton =
document.querySelector(".music-toggle");

const musicIcon =
document.getElementById("musicIcon");

if(portfolioMusic){

    // AUTOPLAY TRY

    window.addEventListener("load", () => {

        portfolioMusic.volume = 0.45;

        const playPromise =
        portfolioMusic.play();

        if(playPromise !== undefined){

            playPromise.then(() => {

                if(musicButton){

                    musicButton.classList.add(
                    "playing"
                    );

                }

            }).catch(() => {

                console.log(
                "Autoplay blocked by browser"
                );

            });

        }

    });

}


// TOGGLE MUSIC

function togglePortfolioMusic(){

    if(!portfolioMusic) return;

    if(portfolioMusic.paused){

        portfolioMusic.play();

        musicIcon.innerHTML = "♫";

        musicButton.classList.add(
        "playing"
        );

    }

    else{

        portfolioMusic.pause();

        musicIcon.innerHTML = "⏸";

        musicButton.classList.remove(
        "playing"
        );

    }

}

// ========================================
// SAFE GALLERY ANIMATIONS
// ========================================

window.addEventListener("DOMContentLoaded", () => {

    // HERO TITLE

    const heroTitle = document.querySelector(".gallery-hero h1");

    if(heroTitle){

        heroTitle.classList.add("hero-title-show");

    }

    // HERO TEXT

    const heroText = document.querySelector(".gallery-hero p");

    if(heroText){

        heroText.classList.add("hero-text-show");

    }

    // GALLERY ITEMS

    const galleryItems = document.querySelectorAll(".gallery-item");

    if(galleryItems.length > 0){

        const observer = new IntersectionObserver((entries) => {

            entries.forEach((entry) => {

                if(entry.isIntersecting){

                    entry.target.classList.add("show-gallery-item");

                }

            });

        }, {

            threshold: 0.15

        });

        galleryItems.forEach((item) => {

            observer.observe(item);

        });

    }

    // NAVBAR EFFECT

    const nav = document.querySelector(".gallery-nav");

    window.addEventListener("scroll", () => {

        if(nav){

            if(window.scrollY > 50){

                nav.classList.add("nav-scrolled");

            } else {

                nav.classList.remove("nav-scrolled");

            }

        }

    });

});
