// YOUR CODE BELOW
function myUnshift(array, value) {
    let newArray = [];

    newArray[0] = value;

    for(i = 0; i < array.length; i++) {
        newArray[i + 1] = array[i];
    }

     return newArray;
}