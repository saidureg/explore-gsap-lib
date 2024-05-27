gsap.from("#page-1 #box", {
  scale: 0,
  duration: 2,
  delay: 2,
  rotation: 360,
});

gsap.from("#page-2 #box", {
  scale: 0,
  duration: 2,
  delay: 1,
  rotation: 360,
  scrollTrigger: "#page-2 #box",
});
