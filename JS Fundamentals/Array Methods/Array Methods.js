// Problem 1. Make person

// Write a function for creating persons.
// Each person must have firstname, lastname, age and gender (true is female, false is male)
// Generate an array with ten person with different names, ages and genders

console.log('Problem 1. Make Person : ')

var people = createPeople();
people.forEach(function(item) {
    console.log(item);
});
function createPerson(fname, lname, age, gender) {
    return {
        firstname: fname,
        lastname: lname,
        age: age,
        gender: gender
    };
}

function createPeople() {
    var i,
		firstNames = ['Konstantin','Ivan','Petur','Stefan','Georgi','Ivana','Mariq'],
		lastNames = ['Todorov','Petrov','Ivanov','Yordanov','Petkanov','Georgieva','Ilieva'],
		arr = [];
    for (i = 0; i < 7; i += 1) {
        arr[i] = createPerson(firstNames[i], lastNames[i], (Math.random() * 80) | 0, (i > 4));
    }
    return arr;
}

console.log('*********************');


// Problem 2. People of age

// Write a function that checks if an array of person contains only people of age (with age 18 or greater)
// Use only array methods and no regular loops (for, while)

console.log('Problem 2. People of age : ')

var peopleOfAgeOnly = people.every(function(item){
	return item.age >= 18;
})

console.log(peopleOfAgeOnly);
console.log('*********************');


// Problem 3. Underage people

// Write a function that prints all underaged persons of an array of person
// Use Array#filter and Array#forEach
// Use only array methods and no regular loops (for, while)

console.log('Problem 3. Underage people : ')

var underage = people.filter(function(item){
	return item.age <= 18;
}).forEach(function(item){
	console.log(item);
});

console.log('*********************');


// Problem 4. Average age of females

// Write a function that calculates the average age of all females, extracted from an array of persons
// Use Array#filter
// Use only array methods and no regular loops (for, while)

console.log('Problem 4. Average age of females : ')

var femaleSum = people.filter(function(item){
	return item.gender;
}).reduce(function(sum,item,i,arr){
	var count = arr.length;
	return (sum + item.age / count);
}, 0);

console.log(femaleSum);
console.log('*********************');

// Problem 5. Youngest person

// Write a function that finds the youngest male person in a given array of people and prints his full name
// Use only array methods and no regular loops (for, while)
// Use Array#find

console.log('Problem 5. Youngest person : ')
if (!Array.prototype.find) {
	Array.prototype.find = function(callback){
		var i , len = this.length;
		for(i = 0; i < len; i += 1){
			if (callback(this[i],i,this)) {
				return this[i];
			}
		}
	};
}

var youngestMale = people.sort(function(a,b){
	return a.age - b.age;
}).find(function(item){
	return !item.gender;
});

console.log(youngestMale.firstname , youngestMale.lastname );
console.log('*********************');


// Problem 6. Group people

// Write a function that groups an array of persons by first letter of first name and returns the groups as a JavaScript Object
// Use Array#reduce
// Use only array methods and no regular loops (for, while)

console.log('Problem 6. Group people : ')

var result = people.reduce(function(obj,item){
	if (obj[item.firstname[0]]) {
		obj[item.firstname[0]].push(item);
	}else{
		obj[item.firstname[0]] = [item];
	}
	return obj;
}, {});

console.log(result);
console.log('*********************');