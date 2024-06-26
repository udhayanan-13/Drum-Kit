for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);
    animation(buttonInnerHTML);
  });
}

document.addEventListener("keypress", function (event) {
  makeSound(event.key);
  animation(event.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      let tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "a":
      let tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "s":
      let tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "d":
      let tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "j":
      let kickBass = new Audio("sounds/kick-bass.mp3");
      kickBass.play();
      break;

    case "k":
      let snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "l":
      let crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    default:
      console.log("Something went wrong");
  }
}
function animation(currentKey) {
  var activeButton = document
    .querySelector("." + currentKey)
    .classList.add("pressed");
  setTimeout(function () {
    activeButton = document
      .querySelector("." + currentKey)
      .classList.remove("pressed");
  }, 100);
}
