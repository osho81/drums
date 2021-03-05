/*
info eventListener: https://www.w3schools.com/js/js_htmldom_eventlistener.asp
*/

// detecting button click
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  //for-loop is not compulsory here, but shortens the code.
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    //note: "click" triggers next, which is our function:

    var buttonKey = this.innerHTML;

    makeSound(buttonKey);
    buttonAnimation(buttonKey);

  });

}

// detecting press on keyboard
document.addEventListener("keypress", function(event) {
  //Note: capture the whole document; compare above.
  //instead of click, here keypress triggers the callback function

  makeSound(event.key);
  buttonAnimation(event.key);

});

function makeSound(key) {
  //each letter clicked on/pressed on gives its assigned sound
  switch (key) {
    case "w":
      var tom1Audio = new Audio("sounds/tom-1.mp3");
      //creates new audio object (with the built-in constructor).
      tom1Audio.play();
      break;
    case "a":
      var tom2Audio = new Audio("sounds/tom-2.mp3");
      tom2Audio.play();
      break;
    case "s":
      var tom3Audio = new Audio("sounds/tom-3.mp3");
      tom3Audio.play();
      break;
    case "d":
      var tom4Audio = new Audio("sounds/tom-4.mp3");
      tom4Audio.play();
      break;
    case "j":
      var snareAudio = new Audio("sounds/snare.mp3");
      snareAudio.play();
      break;
    case "k":
      var crashAudio = new Audio("sounds/crash.mp3");
      crashAudio.play();
      break;
    case "l":
      var kickassAudio = new Audio("sounds/kick-bass.mp3");
      kickassAudio.play();
      break;
    default:
      console.log(buttonInnerHTML);

  }
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  // we target . (dot is for selecting a class) + passed in letter (click or keypress)
  activeButton.classList.add("pressed");
  // pressed is a definied css-class that now will be added to targeted html elements.

  setTimeout(function() { activeButton.classList.remove("pressed"); }, 200);
}
