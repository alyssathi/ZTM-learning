//turn the array below into this array: [1,2,3,[4],[5]]
const array = [[1],[2],[3], [[[4]]], [[[5]]]]
array.flat(2);

//turn the array below into this array: ['Hello young grasshopper!', 'you are', 'learning fast!']
const greeting = [['Hello', 'young', 'grasshopper!'], ['you', 'are'], ['learning', 'fast!']]

const indiv = greeting.flat();
const indivSpaces = indiv.map((x)=> x + ' ');
const final = indivSpaces.join('');
final

//or you can use a one liner from someone who knows wtf theyre doing!!!!!
const oneLine = greeting.flatMap((x) => x.join(' '));

//turn the trapped 3 into: [3]
const trapped = [[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]
trapped.flat(Infinity);
//or trapped.flat(100); since theres no way there are 100 nested things, what infinity is super sure.a_content

//turn below users with their ID numbers into an array: [['user1', 18273], ['user2', 92833], ['user3', 90315]]
const users = {user1: 18273, user2: 92833, user3: 90315}
const usersArray= Object.entries(users);

//change the output array of the above to have the user's ID multiplied by 2
const double = usersArray.map((id)=> [id[0], id[1]*2]);

//change the output array of the above back into an object
const doubleObject = Object.fromEntries(double)