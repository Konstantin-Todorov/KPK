// Write a function that finds the youngest person in a given array of people and prints his/hers full name
// Each person has properties firstname, lastname and age.

// Example:

// var people = [
//   { firstname : 'Gosho', lastname: 'Petrov', age: 32 }, 
//   { firstname : 'Bay', lastname: 'Ivan', age: 81},… ];

function findYoungest(people) {
    var minAge = Number.MAX_VALUE,
        youngestPerson,
        i;
    for (i = 0; i < people.length; i += 1) {
        if (minAge > people[i].age) {
            minAge = people[i].age;
            youngestPerson = people[i];
        }
    }
    return youngestPerson;
}

var people = [{
    firstname: 'Gosho',
    lastname: 'Goshev',
    age: 32
}, {
    firstname: 'Pesho',
    lastname: 'Peshov',
    age: 23
}, {
    firstname: 'Ivan',
    lastname: 'Ivanov',
    age: 15
}, {
    firstname: 'Dimitar',
    lastname: 'Dimitrov',
    age: 35
}, {
    firstname: 'Todor',
    lastname: 'Todorov',
    age: 19
}];

var youngest = findYoungest(people);


console.log('Youngest person is: ' + youngest.firstname +
    ' ' + youngest.lastname + ', age:' + youngest.age);
