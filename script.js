// ================= SIDEBAR =================

const menuBtn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("closeBtn");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");

menuBtn.addEventListener("click", () => {
    sidebar.classList.add("active");
    overlay.classList.add("active");
});

closeBtn.addEventListener("click", () => {
    sidebar.classList.remove("active");
    overlay.classList.remove("active");
});

overlay.addEventListener("click", () => {
    sidebar.classList.remove("active");
    overlay.classList.remove("active");
});

// ================= DARK MODE =================

document.getElementById("toggleDark").addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

// ================= GSAP ANIMATIONS =================

gsap.registerPlugin(ScrollTrigger);

gsap.from("header h1", {
    y: -50,
    opacity: 0,
    duration: 1
});

gsap.from(".book-img", {
    x: -100,
    opacity: 0,
    duration: 1
});

gsap.from(".book-info", {
    x: 100,
    opacity: 0,
    duration: 1
});

gsap.from(".author-container", {
    scrollTrigger: {
        trigger: ".author",
        start: "top 80%"
    },
    y: 100,
    opacity: 0,
    duration: 1
});

gsap.from(".features li", {
    scrollTrigger: {
        trigger: ".features",
        start: "top 80%"
    },
    y: 50,
    opacity: 0,
    stagger: 0.2
});
