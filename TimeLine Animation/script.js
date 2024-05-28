let menuIcon = document.querySelector("#nav i");
let closeIcon = document.querySelector("#full i");

// let tl = gsap.timeline({ paused: true });
let tl = gsap.timeline();

tl.to("#full", {
  duration: 0.5,
  right: 0,
});

tl.from("#full h4", {
  duration: 0.6,
  x: 150,
  opacity: 0,
  stagger: 0.2,
});

tl.from("#full i", {
  opacity: 0,
});

tl.pause();

menuIcon.addEventListener("click", () => {
  tl.play();
});

closeIcon.addEventListener("click", () => {
  tl.reverse();
});
