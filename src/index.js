function learnMore() {
  let name = prompt("What is your name?");
  let computer = prompt("Are you a human or AI?");
  computer = computer.toLowerCase();
  computer = computer.trim();

  if (computer === "human") {
    alert("Hi, " + name + "! You may learn more about this study.");
  } else {
    alert("Nice try, " + name + "... but you're the subject of this study.");
  }
}
let applyButton = document.querySelector("button");
applyButton.addEventListener("click", learnMore);
