// Write a function that sums an array of numbers:
// Numbers must be always of type Number
// Returns null if the array is empty
// Throws Error if the parameter is not passed (undefined)
// Throws if any of the elements is not convertible to Number

function solve() {
    return function sumNumbersInArray(array) {

        var isDigit = !array.every(function (item) {
                return !isNaN(item);
            }),
            isEmptyArray = array.length === 0,
            isUndefined = !array;
        if (isEmptyArray) {
            return null;
        }
        if (isUndefined) {
            throw 'Thre is no array.';
        }
        if (isDigit) {
            throw 'Please enter a digit.';
        }
        return array.reduce(function (a, b) {
            return parseInt(a) + parseInt(b)
        });
    }
}