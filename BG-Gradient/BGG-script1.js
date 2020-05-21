var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomButton = document.querySelector(".random");

function changeColor(){
    body.style.background = "linear-gradient(to right, "
     + color1.value 
     + "," 
     + color2.value 
     + ")";

    css.innerHTML = body.style.background + ";";
}

color1.addEventListener("input", changeColor);
color2.addEventListener("input", changeColor);

function getRandomColor() {
    let hexCode = "#" 

    while ( hexCode.length < 7 ) {
      hexCode += (Math.floor(Math.random() * 15)).toString(16) 
    }

    return hexCode;
}

function setRandomColor(){
    color1.value = getRandomColor(); 
    color2.value = getRandomColor();
    changeColor();
}

randomButton.addEventListener("click", setRandomColor);

window.addEventListener("load", setRandomColor);