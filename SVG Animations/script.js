let path = `M 10 100 Q 600 100 1190 100`;

let finalPath = `M 10 100 Q 600 100 1190 100`;

const string = document.querySelector("#string");

string.addEventListener("mousemove", (dets) => {
  path = `M 10 100 Q ${dets.x} ${dets.y} 1190 100`;

  gsap.to("svg path", {
    attr: {
      d: path,
    },
    duration: 0.3,
    ease: "power3.out",
  });
});

string.addEventListener("mouseleave", () => {
  gsap.to("svg path", {
    attr: {
      d: finalPath,
    },
    duration: 1.3,
    ease: "elastic.out(1, 0.1)",
  });
});
