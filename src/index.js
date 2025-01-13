function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "The Raven by Edgar Allan Poe",
    autoStart: true,
    cursor: "",
    delay: 1,
  });
}

let poemFormComponent = document.querySelector("#poem-generator-form");
poemFormComponent.addEventListener("submit", generatepoem);
