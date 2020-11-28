// YOUR CODE BELOW
function myLastIndexOf(array, searchValue, startIdx) {
    if(!startIdx) startIdx = array.length - 1;

    for(i = startIdx; i >= 0; i--) {
        if(array[i] === searchValue) return i;
    }

    return -1;
}