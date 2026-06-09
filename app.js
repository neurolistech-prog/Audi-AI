// Enregistrement du plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Timeline maîtresse liée au scroll de la page
const tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".panel",
        start: "top top",
        end: "+=2500", // Durée du scroll pour accomplir l'animation
        pin: true,     // Fixe l'écran pendant l'animation
        scrub: 1,      // Liaison fluide avec la molette
    }
});

// Enchaînement de la séquence
tl.to(".audi-hud", {
    opacity: 1,
    scale: 1,
    x: 0,
    duration: 2,
    ease: "power2.out"
})
    .to(".brand", {
        opacity: 1,
        y: 0,
        duration: 1
    }, "-=1") // Commence au milieu de l'apparition du HUD
    .to(".spec-item", {
        opacity: 1,
        x: 0,
        stagger: 0.4, // Apparition séquentielle de chaque bloc technique
        duration: 1.5,
        ease: "power3.out"
    }, "-=0.5");
