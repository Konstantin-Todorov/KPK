// Write a function that reverses the digits of given decimal number.
// Example:

// input	output
// 256	    652
// 123.45	54.321


var decimal = [356,115,321.45,1223.231,712412.21,12.124517],
	i,
	reversed;

for(i=0;i<decimal.length;i+=1){
	reversed = reverseNumber(decimal[i]);
	console.log(decimal[i] + ' reversed : ' + reversed);
}

function reverseNumber(number){
	return number.toString().split('').reverse().join('');
}