const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
    const p = document.querySelector('p');
    p.style.color = '#BADA55';
    p.style.fontSize = '50px';
}

const variable = 'cool';

// Regular
console.log('Hello');
// Interpolated
console.log('Hello I am a %s string!', 'cool');
console.log(`Hello I am a ${variable} string!`);
// Styled
console.log('%c I am some great text!', 'font-size:50px; text-shadow: 10px 10px 0 red');
// warning!
console.warn('OH NOO');
// Error :|
console.error('CRITITAL ERROR');
// Info
console.info('This is just a good information');
// Testing
const p = document.querySelector('p');
console.assert(p.classList.contains('ouch'), 'That is not fine')
// clearing
//console.clear();
// Viewing DOM Elements
console.log(p);
console.dir(p);
// Grouping together
dogs.forEach(dog => {
    console.groupCollapsed(`${dog.name}`);
    console.log(`This is ${dog.name}.`);
    console.log(`${dog, name} is ${dog.age} years old.`);
    console.log(`${dog, name} is ${dog.age * 7} dog years old.`);
    console.groupEnd(`${dog.name}`);
});
// counting
console.count('Wes');
console.count('Wes');
console.count('Lu');
console.count('LuLu');
console.count('Wes');
console.count('Lu');
// timing
console.time('fetching data');
fetch('https://api.github.com/users/break7533')
    .then(data => data.json())
    .then(data => {
        console.timeEnd('fetching data');
        console.log(data);
    })

console.table(dogs);