var database = [
    {username: "lucy",
    password: "123"},

    {username: "sally",
    password: "456"},

    {username: "john",
    password: "789"}
];

var newsfeed = [
    {username: "vlad",
    post: "hi there"},

    {username: "joe",
    post: "regular joe"},

    {username: "krista",
    post: "can i go?"}
]

var usernamePrompt = prompt("What is your username?");
var passwordPrompt = prompt("What is your password?");

// function verify(user, pass) {
//     if (user === database[0].username && pass === database[0].password) {
//         console.log(newsfeed);
//     } else {
//         alert("incorrect username or password");
//     }
// }

function isUserValid(user,pass) {
    for (var i = 0; i<database.length; i++) {
        if (database[i].username === user && database[i].password===pass) {
            return true;
        }
    }
    return false
}

function signIn(user, pass) {
    if(isUserValid(user,pass) === true) {
        console.log(newsfeed);
    } else {
        alert("Sorry, wrong username or password")
    }
}

signIn(usernamePrompt,passwordPrompt);