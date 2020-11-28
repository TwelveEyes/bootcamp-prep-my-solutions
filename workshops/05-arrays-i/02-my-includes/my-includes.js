// YOUR CODE BELOW
function myIncludes(array, searchValue) {
    for(i = 0; i < array.length; i++) {
        if(array[i] === searchValue) return true;
    }

    return false;
}