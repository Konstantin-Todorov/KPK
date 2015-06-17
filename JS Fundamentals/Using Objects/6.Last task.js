// Write a function that groups an array of people by age, first or last name.
// The function must return an associative array, with keys - the groups, and values - arrays with people in this groups
// Use function overloading (i.e. just one function)

// Example:

// var people = {…};
// var groupedByFname = group(people, 'firstname');
// var groupedByAge= group(people, 'age');

function group(people, prop) {
    var arr = new Array(),
        i,
        grProp;
    switch (prop) {
        case 'age':
            {

                for (i = 0; i < people.length; i += 1) {
                    grProp = people[i].age;
                    if (arr[grProp]) {
                        (arr[grProp]).push(people[i]);
                    } else {
                        arr[grProp] = [people[i]];
                    }
                }
            }
            break;
        case 'lastname':
            {
                for (i = 0; i < people.length; i += 1) {
                    grProp = people[i].lastname;
                    if (arr[grProp]) {
                        (arr[grProp]).push(people[i]);
                    } else {
                        arr[grProp] = [people[i]];
                    }
                }
            }
            break;
        case 'firstname':
            {
                for (i = 0; i < people.length; i += 1) {
                    grProp = people[i].firstname;
                    if (arr[grProp]) {
                        (arr[grProp]).push(people[i]);
                    } else {
                        arr[grProp] = [people[i]];
                    }
                }
            }
            break;
        default:
            break;
    }
    return arr;
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
    firstname: 'Gosho',
    lastname: 'Ivanov',
    age: 23
}, {
    firstname: 'Ivan',
    lastname: 'Goshev',
    age: 19
}, {
    firstname: 'Dimitar',
    lastname: 'Todorov',
    age: 32
}, {
    firstname: 'Dimitar',
    lastname: 'Dimitrov',
    age: 35
}, {
    firstname: 'Ivan',
    lastname: 'Dimitrov',
    age: 35
}, {
    firstname: 'Todor',
    lastname: 'Todorov',
    age: 19
}];

var prop;
var groupedByAge = group(people, 'age');
var groupedByFname = group(people, 'firstname');
var groupedByLname = group(people, 'lastname');

for (prop in groupedByAge) {
    console.log('Grouped by age: ' + prop);
    console.log(groupedByAge[prop]);
    console.log('\n');
}
console.log('-------------------------------------------------------------');
for (prop in groupedByFname) {
    console.log('Grouped by firstname: ' + prop);
    console.log(groupedByFname[prop]);
    console.log('\n');
}
console.log('-------------------------------------------------------------');
for (prop in groupedByLname) {
    console.log('Grouped by lastname: ' + prop);
    console.log(groupedByLname[prop]);
    console.log('\n');
}
console.log('-------------------------------------------------------------');