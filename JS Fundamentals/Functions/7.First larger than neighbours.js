// Write a function that returns the index of the first element in array that is larger than its neighbours or -1, if there’s no such element.
// Use the function from the previous exercise.

var arr = [2, 3, 4, 5, 6, 5, 3, 2],  //change array elements for different cases :) 
    i = 0,							// [2,1,3] will return index 0
    firstIndex;						// [2,2,3] will return last index
    								// [2,2,2] will return no such element :)
firstIndex = check(arr);
if (firstIndex >= 0) {
    console.log('First element in array that is larger than its neighbours is at position: ' + firstIndex);
} else {
    console.log('There’s no such element!');
}

function check(arr) {
    var position;
    for (position = 0; position < arr.length; position += 1) {

        if (arr[position] > arr[position + 1] && arr[position] > arr[position - 1]) {
            return position;
        } else if (!position && arr[0] > arr[1]) {
            return 0;
        } else if (position === arr.length - 1 && arr[arr.length - 1] > arr[arr.length - 2]) {
            return arr.length - 1;
        }
    }
    return -1;
}