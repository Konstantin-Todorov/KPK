// Write a function that finds all the occurrences of word in a text.
// The search can be case sensitive or case insensitive.
// Use function overloading.

var text = 'Lorem ipsum Sequi dolor sit amet, consectetur Lorem adipisicing elit. Modi sequi illo, amet perspiciatis suscipit cupiditate ad sequi molestias possimus voluptates asperiores! Aperiam, a possimus facere neque voluptate officiis sequi suscipit est nulla velit!',
	key = 'sequi'; // suscipit ,amet ,Lorem ,possimus

	
console.log('The word ' + '\'' + key +'\'' + 'is found ' + findOccurances(text,key) + ' times - Case In Sensitive' );
console.log('The word ' + '\'' + key +'\'' + 'is found ' + findOccurances(text,key,true) + ' times - Case Sensitive' );

function findOccurances(text,key,sensitive){
	var i,
		clear = '',
		arr = new Array(),
		counter = 0;
	for(i = 0; i<text.length;i+=1){
		if ((text[i] >= 'a' && text[i] <='z') ||  (text[i] >= 'A' && text[i] <= 'Z') || text[i] === ' ')  {
			clear+=text[i];
		} else{
			clear+= ' ';
		}
	}

	if (!!sensitive) {} else{
		clear = clear.toLowerCase();
		key = key.toLowerCase();
	}

	arr = toArrayWithWords(clear);

	for(i = 0; i<arr.length;i+=1){
		if (key === arr[i]) {
			counter +=1
		}
	}
	return counter;
}

function toArrayWithWords(clear){
	  var count,
        j,
        i,
        arr = new Array();
    arr = clear.split(' ');
    for (i = 0; i < arr.length; i += 1) {
        count = 0;
        if (arr[i] === '') {
            j = i;
            while (arr[j] === '') {
                count += 1;
                j += 1;
            }
            arr.splice(i, count);
        }
    }
    return arr;
}

