// gsap.from("#page-1 #box", {
//   scale: 0,
//   duration: 2,
//   delay: 2,
//   rotation: 360,
// });

// gsap.from("#page-2 #box", {
//   scale: 0,
//   duration: 2,
//   rotation: 360,
//   scrollTrigger: {
//     trigger: "#page-2 #box",
//     scroller: "body",
//     markers: true,
//     start: "top 80%",
//   },
// });

gsap.from("#page-3 h1", {
  opacity: 0,
  duration: 2,
  x: -200,
  scrollTrigger: {
    trigger: "#page-3 h1",
    scroller: "body",
    markers: true,
    start: "top 60%",
  },
});

gsap.from("#page-3 h2", {
  opacity: 0,
  duration: 2,
  x: 200,
  scrollTrigger: {
    trigger: "#page-3 h2",
    scroller: "body",
    markers: true,
    start: "top 60%",
  },
});
