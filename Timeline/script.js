const tl = gsap.timeline();

tl.to("#box1", {
  x: 700,
  duration: 2,
  delay: 1,
});

tl.to("#box2", {
  x: 700,
  duration: 2,
  backgroundColor: "lightblue",
});

tl.to("#box3", {
  x: 700,
  duration: 2,
  backgroundColor: "lightcoral",
});
