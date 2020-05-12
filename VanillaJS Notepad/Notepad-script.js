var button = document.getElementById("addMe");
var userInput = document.getElementById("userInput");
var ul = document.querySelector("ul");

// button.addEventListener("click", function(){
//     if (userInput.value.length > 0) {
//     var li = document.createElement("li");
//     li.appendChild(document.createTextNode(userInput.value));
//     ul.appendChild(li);
//     userInput.value = "";
//     }
// })

//createElement will create the element in quotes but in order to actually display text within it, you have to use createTextNode. Even here, you will not see the display because it isn't attached to anything. That is why we attach the li to the ul.

//the if element tells us to only run the code if there is something typed.
//the userInput.value set equal to an empty string is so that there isn't anything in the input after being clicked.

// userInput.addEventListener("keypress", function(event){
//     if (userInput.value.length > 0 && event.which === 13 || event.keyCode === 13) {
//     var li = document.createElement("li");
//     li.appendChild(document.createTextNode(userInput.value));
//     ul.appendChild(li);
//     userInput.value = "";
//     }
// })

//this looks for the '13' key (enter) to be pressed while in the userInput field and will add it to the list. check out https://www.cambiaresearch.com/articles/15/javascript-char-codes-key-codes to look at more keycodes.

//one issue here: there is a lot of repeating code. How do we clean it up? Look at the repeating code and set it to a function!

//minor change
function inputLength() {
    return userInput.value.length;
}

//big change
function createListElement () {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(userInput.value));
    ul.appendChild(li);
    userInput.value = "";
    }

function addAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}
function addAfterEnter (event) {
    if (inputLength() > 0 && event.which === 13){
        createListElement();
    }
}

//look how clean!
button.addEventListener("click", addAfterClick);

userInput.addEventListener("keypress", addAfterEnter);