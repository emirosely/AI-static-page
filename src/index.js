function learnMore() {
  let computer = prompt("Are you a human or AI?");
  computer = computer.toLowerCase();
  computer = computer.trim();

  if (computer === "human") {
    window.location =
      "https://sensilab.monash.edu/phd-projects/the-ethics-of-ai-art/";
  } else {
    alert("Nice try... but you're the subject of this study.");
  }
}
let applyButton = document.querySelector("button");
applyButton.addEventListener("click", learnMore);
