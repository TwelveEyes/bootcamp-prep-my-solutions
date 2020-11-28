// YOUR CODE BELOW
function reverseArray(array) {
    let reverseArray = [];

    while(array.length) {
        reverseArray.push(array.pop());
    }
    
    for(i = 0; i < reverseArray.length; i++) {
        array.push(reverseArray[i])
    }

    return array;
}