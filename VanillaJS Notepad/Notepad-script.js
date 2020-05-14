var button = document.getElementById("addMe");
var userInput = document.getElementById("userInput");
var ul = document.querySelector("ul");

function inputLength() {
    return userInput.value.length;
}
function createListElement () {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(userInput.value));
    ul.appendChild(li);
    userInput.value = "";

        var btn = document.createElement("button");
        btn.appendChild(document.createTextNode("Delete!"));
        li.appendChild(btn);
        btn.onclick = removeParent;
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

//DOM EVENT EXERCISE

//toggle done class
var listItems = document.getElementsByTagName("li");

ul.onclick = function(event) {
    var target = event.target;
    target.classList.toggle("done");
}

//DELETE BUTTONS

function listLength() {
    return listItems.length;
}
function removeParent(event) {
    event.target.parentNode.remove();
}
function deleteButton() {
    var btn = document.createElement("button");
    btn.appendChild(document.createTextNode("Delete!"));
    listItems[i].appendChild(btn);
    btn.onclick = removeParent;
}
    
for (i=0;i<listLength();i++){
    deleteButton();
}