function breakTheText() {
  let h1 = document.querySelector("h1");
  let text = h1.textContent;

  let splittedText = text.split("");
  let halfValue = Math.floor(splittedText.length / 2);

  let clutter = "";

  splittedText.forEach((e, idx) => {
    if (idx < halfValue) {
      clutter += `<span class="firstHalf">${e}</span>`;
    } else {
      clutter += `<span class="secondHalf">${e}</span>`;
    }
  });

  h1.innerHTML = clutter;
}

breakTheText();

gsap.from("h1 .firstHalf", {
  duration: 0.6,
  delay: 0.5,
  y: 80,
  opacity: 0,
  stagger: 0.15,
});

gsap.from("h1 .secondHalf", {
  duration: 0.6,
  delay: 0.5,
  y: 80,
  opacity: 0,
  stagger: -0.15,
});
