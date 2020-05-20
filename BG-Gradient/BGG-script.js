var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomButton = document.querySelector(".random");

function colorInput () {
    body.style.background = 
    "linear-gradient(to right, " 
    + color1.value 
    + ", " 
    + color2.value
    + ")";

    css.textContent = body.style.background + ";";
}

//you can select an input event by "input"
color1.addEventListener("input", colorInput);

color2.addEventListener("input", colorInput);

randomButton.addEventListener("click", setRandomColor);

// function getRandomColor() {
    
    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      }
      
      function setRandomColor(){
          color1.value = getRandomColor(); 
          color2.value = getRandomColor();
          colorInput();
      }
      
//Window will have textContent onload
window.addEventListener("load", setRandomColor);