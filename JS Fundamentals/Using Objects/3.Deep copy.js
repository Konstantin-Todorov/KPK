// Write a function that makes a deep copy of an object.
// The function should work for both primitive and reference types.

function createDeepCopy(obj) {
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }

    var copy = obj.constructor();
    for (var prop in obj) {
        copy[prop] = createDeepCopy(obj[prop]);
    }

    return copy;
}
var obj = {
    fname: 'Koceto',
    lname: 'Vandala',
    age: 35,
    arr: [1, 2, 3, 4],
    hair: {
        color: 'black',
        size: 'short'
    }
}

var copy = createDeepCopy(obj);
var prop;
console.log('Copy :');
for (prop in copy) {
    console.log(prop + ' -> ' + copy[prop]);
}
console.log('Hair color: ' + copy.hair.color);


console.log('\nNow we change obj.fname to \'Pesho\' and obj.hair.color to \'red\'\n');

obj.hair.color = 'red';
obj.fname = 'Pesho';

console.log('Changed Obj :');
for (prop in obj) {
    console.log(prop + ' -> ' + obj[prop]);
}
console.log('Hair color: ' + obj.hair.color);

console.log('\nCopy :');
for (prop in copy) {
    console.log(prop + ' -> ' + copy[prop]);
}
console.log('Hair color: ' + copy.hair.color);