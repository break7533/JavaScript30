// start with strings, numbers and booleans
let age = 100;
let age2 = age;
console.log(age, age2);
age = 200;
console.log(age, age2);

let name = 'Luis';
let name2 = name;
console.log(name, name2);
name = 'lopes';
console.log(name, name2);

// Let's say we have an array
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

// and we want to make a copy of it.
const team = players;
console.log(players, team);
// You might think we can just do something like this:

//team[3] = 'luis';

// however what happens when we update that array?
console.log(players, team);
// now here is the problem!

// oh no - we have edited the original array too!

// Why? It's because that is an array reference, not an array copy. They both point to the same array!

// So, how do we fix this? We take a copy instead!
const team5 = Array.from(players);
// one way
const team2 = players.slice();
// or create a new array and concat the old one in
const team3 = [].concat(players);
// or use the new ES6 Spread
const team4 = [...players];
// now when we update it, the original one isn't changed
team2[3] = 'Luis';
team3[3] = 'Luis';
team4[3] = 'Luis';
team5[3] = 'Luis';

console.log(players, team2, team3, team4, team5);
// The same thing goes for objects, let's say we have a person object

// with Objects
const person = {
    name: 'Wes Bos',
    age: 80
};

// and think we make a copy:
const person2 = Object.assign({}, person, { name: 'Luis Lopes', age: 99 });
console.log(person, person2);
// how do we take a copy instead?

// We will hopefully soon see the object ...spread
const person3 = { ...person };
console.log(person, person3);
// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.

const personComplex = {
    name: 'Luis Lopes',
    age: 22,
    social: {
        twitter: '@break7533',
        facebook: 'break7533'
    }
};

const dev = { ...personComplex };

const poorsManClone = JSON.parse(JSON.stringify(personComplex));


console.log(personComplex);
console.log(dev);