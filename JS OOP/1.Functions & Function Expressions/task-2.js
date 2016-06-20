// Write a function that finds all the prime numbers in a range
// It should return the prime numbers in an array
// It must throw an Error if any of the range params is not convertible to Number
// It must throw an Error if any of the range params is missing

function task2(x, y) {
	var result = [],
        		  i;

    function isPrime(n) {
        var k,
            len = Math.sqrt(n),
            flag = true;
        for (k = 2; k <= len; k++) {
            if (!(n % k)) {
                flag = false;
            }
        }
        return flag;
    }

    if (isNaN(+x) || isNaN(+y)) {
        throw new Error('yes');
    } else if (arguments.length < 2) {
        throw new Error('yes');
    }

    for (i = x; i <= y; i += 1) {
        if (isPrime(i)) {
            result.push(i);
        }
    }
    return result;

}

console.log(task2(2, 5));