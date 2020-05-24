//Change this to ES6:

//destructuring:
    // var person = {
    //     firstName: "john",
    //     lastName: "doe",
    //     age: 50,
    //     eyeColor: "blue"
    // };

    // var firstName= person.firstName;
    // var lastName= person.lastName;
    // var age = person.age;
    // var eyeColor = person.eyeColor;

const person = {
    firstName: "john",
    lastName: "doe",
    age: 50,
    eyeColor: "blue"
}

    let {firstName, lastName, age, eyeColor} = person;


//Object properties
    // var d =  'test';
    // var e = true;
    // var f = 789;

    // var okObj = {
    //     d: d,
    //     e: e,
    //     f: f
    // }

const d = 'test';
const e = true;
const f = 789;

let bestObj = {
    d,
    e,
    f
}

//Template Strings

let firstName = "George";
let city = "Paris";
let year = 1997;

    // var message = "hello " + firstName +", have we met before in " + city + " in the summer of " + year + "?"

let message2 = `hello ${firstName}, have we met before in ${city} in the summer of ${year}?`

//Default arguements

function didWeMeet(firstName='Honey', city = 'Athens', year = "2005") {
    console.log(`hello ${firstName}, have we met before in ${city} in the summer of ${year}?`);
}

//arrow functions

function whereAmI(user, location) {
    if (user&&location) {
        return "I am not lost";
    } else {
        return "I am totally lost!";
    }
}