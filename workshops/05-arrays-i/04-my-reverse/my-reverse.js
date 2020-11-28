// YOUR CODE BELOW
function myReverse(array) {
    let newArray = [];
    let index = 0;

    for(i = array.length - 1; i >= 0; i--) {
        newArray[index] = array[i];
        index++;
    }

    return newArray;
}