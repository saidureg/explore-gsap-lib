gsap.to("#box1", {
  x: 500,
  duration: 1,
  delay: 1,
  backgroundColor: "green",
  rotation: 360,
  repeat: -1,
  yoyo: true,
});

gsap.to("#box2", {
  x: 500,
  y: 100,
  duration: 2,
  delay: 1,
  backgroundColor: "blue",
});

gsap.from("#box3", {
  rotation: 360,
  duration: 2,
  delay: 1,
  x: 500,
});

gsap.fromTo(
  "#box4",
  { x: 200 },
  { x: 600, rotation: 360, duration: 2, delay: 1, backgroundColor: "steelblue" }
);
