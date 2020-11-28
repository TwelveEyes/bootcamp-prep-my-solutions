// YOUR CODE BELOW
function deeperCopy(array) {
    let arrayCopy = [];

    for(i = 0; i < array.length; i++) {
        arrayCopy.push(array[i]);
    }

    return arrayCopy;
}