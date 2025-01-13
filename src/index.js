function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: ["love"],
    autoStart: true,
    delay: 75,
  });
}

let poemFormComponent = document.querySelector("#poem-generator-form");
poemFormComponent.addEventListener("submit", generatePoem);
