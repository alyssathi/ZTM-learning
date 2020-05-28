const array = [
    {
        username: "john",
        team: "red",
        score: 5,
        items: ["ball", "book", "pen"]
    },
    {
        username: "becky",
        team: "blue",
        score: 10,
        items: ["tape", "backpack", "eraser"]
    },
    {
        username: "susy",
        team: "red",
        score: 55,
        items: ["ball", "eraser", "pen"],
    },
    {
        username: "tyson",
        team: "green",
        score: 1,
        items: ["book", "pen"]
    }
];

//create an array using map that adds all usernames with a "!" at the end

const mapArray = array.map((person) => {
    return person.username + "!"
});

//filter the array to only include who is on team red

const filterArray = array.filter((person) => {
    return person.team === "red";
});

//find the total score

const reduceArray = array.reduce((accumulator, person) => {
    return accumulator + person.score;
},0);

//make this mapfunction pure

const arrayNum = [1,2,4,5,8,9];
const newArray = arrayNum.map(num => num * 2);

//create a new list with all user info, but add '!' to the end of each item they own.