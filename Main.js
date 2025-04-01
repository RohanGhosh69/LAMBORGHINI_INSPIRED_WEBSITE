gsap.from(".Loading-logo img", {
    opacity: 0,
    scale: 0.8,
    duration: 1.5,
    ease: "power2.out"
});

window.onload = function () {
    gsap.to(".Load-cnt", {
        opacity: 0,
        duration: 1,
        onComplete: () => document.getElementById("loading-screen").style.display = "none"
    });
};