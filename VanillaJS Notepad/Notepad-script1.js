var button = document.getElementById("addMe");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");

function createListElement(){
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value="";

    var btn = document.createElement("button");
    btn.appendChild(document.createTextNode("Delete!"));
    li.appendChild(btn);
    btn.onclick = removeParent;
    }

function addAfterClick() {
    if (input.value.length>0){
        createListElement();
    }
}

function addAfterEnter() {
    if (input.value.length>0 && event.which===13) {
        createListElement();
    }
}

button.addEventListener("click", addAfterClick);
input.addEventListener("keypress", addAfterEnter);

//toggle .done class

ul.onclick = function(event) {
    event.target.classList.toggle("done");
}

//delete buttons
var listItems = document.getElementsByTagName("li");

function removeParent(){
    event.target.parentNode.remove();
}

function createDeleteButton() {
    var btn = document.createElement("button");
    btn.appendChild(document.createTextNode("Delete!"));
    listItems[i].appendChild(btn);
    btn.onclick = removeParent;
}

for (i=0;i<listItems.length; i++){
    createDeleteButton();
}