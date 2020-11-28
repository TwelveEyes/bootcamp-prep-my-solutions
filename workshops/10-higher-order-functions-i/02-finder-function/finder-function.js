// YOUR CODE BELOW
function finderFunction(array, callback) {
    for(i = 0; i < array.length; i++) {
        if(callback(array[i])) return i;
    }

    return -1;
}