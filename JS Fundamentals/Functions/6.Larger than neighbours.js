// Write a function that checks if the element at given position in 
// given array of integers is bigger than its two neighbours (when such exist).

var arr = [2, 3, 4, 5, 6, 2, 3, 2],
    position = [0, 2, -1, 6, 125, arr.lenght - 1],
    i = 0;

for (i = 0; i < position.length; i += 1) {
    console.log(check(arr, position[i]));

}

function check(arr, position) {
    if (position < 0 || position >= arr.length - 1) {
        return 'Element at position : ' + position + ' not exist!';
    } else if (!position) {
        if (arr[0] > arr[1]) {
            return 'Element at position : 0 is bigger that its neighbour at position 1!';
        } else {
            return 'Element at position : 0 is not bigger that its neighbour at position 1!';
        }
    } else if (position === arr.length - 1) {
        if (arr[arr.length - 1] > arr[arr.length - 2]) {
            return 'Element at position : ' + (arr.length - 1) + ' is bigger that its neighbour at position ' + (arr.length - 2) + '!';
        } else {
            return 'Element at position : ' + (arr.length - 1) + ' is not bigger that its neighbour at position ' + (arr.length - 2) + '!';
        }
    } else {
        if (arr[position] > arr[position - 1] && arr[position] > arr[position + 1]) {
            return 'Element at position : ' + position + ' is bigger that its neighbours';
        } else {
            return 'Element at position : ' + position + ' is not bigger that its neighbours';
        }
    }
}