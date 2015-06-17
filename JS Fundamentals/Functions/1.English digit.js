// Write a function that returns the last digit of given integer as an English word.
// Examples:

// input	output
// 512	     two
// 1024  	four
// 12309	nine

var number = 12315,
	inWord;

inWord = lastDigit(number);
console.log('The Last Digit Of The Number ' + '\'' + number +'\'' + ' is => '+ inWord);

function lastDigit(number){
	var digit = number % 10;
	switch(digit){
        case 1:
            return 'One';
        case 2:
            return 'Two';
        case 3:
            return 'Three';
        case 4:
            return 'Four';
        case 5:
            return 'Five';
        case 6:
            return 'Six';
        case 7:
            return 'Seven';
        case 8:
            return 'Eight';
        case 9:
            return 'Nine';
        default:
            return NaN;
	}
}