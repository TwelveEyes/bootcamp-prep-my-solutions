// YOUR CODE BELOW
function veryOdd(array) {
    let newArray = [];

    for(i = 0; i < array.length; i++) {
        if(array[i] % 2 !== 0) newArray.push(array[i]);
    }

    return newArray;
}