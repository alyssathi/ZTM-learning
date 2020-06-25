var button = document.getElementById("addMe");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");

const removeParent = (event) => {
    event.target.parentNode.remove();
}

const createListItem = () => {
    if (input.value.length>0) {
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(input.value));
        ul.appendChild(li);
        input.value = "";

        let btn = document.createElement("button");
        btn.appendChild(document.createTextNode("Delete"));
        li.appendChild(btn);

        btn.addEventListener("click", removeParent);
    }
}

const addAfterKeypress = (e) => {
    if (e.which === 13) {
        createListItem();
    }
}

// const listItem = document.getElementsByTagName("li");

const toggleCrossOut = () => {
    let target = event.target;
    target.classList.toggle('done');
}

ul.addEventListener("click", toggleCrossOut);
button.addEventListener("click", createListItem);
input.addEventListener("keypress", addAfterKeypress);
