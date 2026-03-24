document.addEventListener("DOMContentLoaded", () => {

    // ===================== GSAP — TIMELINE =====================
    const tl = gsap.timeline();

    // Profile image
    tl.from(".profile-img", {
        y: 60,
        filter: "blur(10px)",
        opacity: 0,
        duration: 1.3,
        ease: "power2.out"
    });

    // Hero text elements
    tl.from(".hero-text > *:not(.profile-img)", {
        y: 60,
        opacity: 0,
        filter: "blur(10px)",
        duration: 1.2,
        stagger: 0.2,
        ease: "power4.out"
    }, "-=0.5");

    // Social buttons
    tl.from(".social-buttons > *", {
        yPercent: 50,
        opacity: 0,
        filter: "blur(8px)",
        duration: 1,
        stagger: 0.15,
        ease: "back.out(1.7)"
    }, "-=0.6");

    // GitHub block
    tl.from(".github-block > *", {
        y: 60,
        opacity: 0,
        filter: "blur(10px)",
        duration: 1.2,
        stagger: 0.2,
        ease: "power4.out"
    }, "-=0.5");

    // Tech block
    tl.from(".tech-block > *", {
        y: 60,
        opacity: 0,
        filter: "blur(10px)",
        duration: 1.2,
        stagger: 0.2,
        ease: "power4.out"
    }, "-=0.5");

    // About text
    tl.from(".about-text > *", {
        y: 60,
        opacity: 0,
        filter: "blur(10px)",
        duration: 1.2,
        stagger: 0.2,
        ease: "power4.out"
    }, "-=0.5");


});

// ===================== CERTIFICATE MODAL =====================

function openCert(card) {
    const img = card.querySelector("img").src;
    document.getElementById("modalImage").src = img;
    document.getElementById("certModal").style.display = "flex";
}

function closeCert() {
    document.getElementById("certModal").style.display = "none";
}

// Click outside modal to close
window.onclick = function (e) {
    const modal = document.getElementById("certModal");
    if (e.target === modal) {
        modal.style.display = "none";
    }
};