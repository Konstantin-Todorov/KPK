// Write a function that counts how many times given number appears in given array.
// Write a test function to check if the function is working correctly.

var arr = [2, 2, 2, 2, 2, 3, 3, 3, 4, 6, 6, 6, 6, 9, 9, 9, 0, 0],
    numbers = [2, 3, 4, 7],
    i,
    counts = new Array(4),
    correct;

counts = findApearences(arr, numbers);

correct = test(counts);
console.log('Answer: ')
for(i =0;i<numbers.length;i+=1){
	console.log('Number: ' + numbers[i] + ' - counts' + counts[i]);
}
console.log('Is this correct answer? : ' + (!!correct ? 'Yes' : 'No'));

function findApearences(array,keys){
	var counts = new Array(keys.length),
		i,
		j;
	for(j=0;j<counts.length;j+=1){
		counts[j] =0;
		for(i=0;i<array.length;i+=1){
			if (keys[j] === array[i]) {
				counts[j] +=1;	
			}
		}
	}
	return counts;
}

function test(counts){
	if (counts[0] === 5 && counts[1] === 3 && counts[2] ===1 && counts[3] === 0){
		return 1;
	} else {
		return 0;
	}
}