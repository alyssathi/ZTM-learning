//Building simple Facebook

//we can have multiple people using it so we will have an array of objects
var database = [
    {
        username: "iLoveGoats",
        password: "goatlover"
    },

    {
        username: "Greta",
        password: "goearth"
    },

    {
        username: "RBG",
        password: "justiceforall"
    }
];

var newsfeed = [
    {
        username: "Greta",
        timeline: "Time we step up for Mother Earth!" 
    },
    {
        username: "RBG",
        timeline: "Fighting for fairness for all."
    },
    {
        username: "Goddall",
        timeline: "Every person and animal on this earth is worth something!"
    }
];

//verification of the sign-in

function isUserValid(user, pass){
    for (var i = 0; i<database.length; i++) {
        if(database[i].username === user && database[i].password === pass) {
            return true;
        }
    }
    return false;
}
function verify(user, pass){
    if (isUserValid(user, pass) === true) {
        console.log(newsfeed);
    } else {
        alert("sorry, wrong username");
    }
}

//sign in
var userNamePrompt = prompt("what's your username?");
var passwordPrompt = prompt("what's your password?");

verify(userNamePrompt, passwordPrompt);

//Previous attempts with limited knowledge below!!

// this is only for One User!!!! function verify(user, pass) {
//     if(database[0].username === user && database[0].password === pass) {
//         alert(console.log(newsfeed));
//     } else {
//         alert("incorrect.");
//     }
// };

// Looping with wrong logic...
// function verify(user,pass) {
//     for (var i = 0; i<database.length; i++) {
//         if(database[i].username === user && database[i].password === pass) {
//             console.log(newsfeed);
//             }
//              else {
//                 alert("incorrect, try again.");
//             }
//         } 
//     }


//we are calling the verify function that can hold two parameters and defining those as the prompt answers. This then looks if the username and password matches the database.
