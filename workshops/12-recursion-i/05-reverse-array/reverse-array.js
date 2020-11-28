// YOUR CODE BELOW
function reverseArray(array) {
    if(array.length === 0) return array.slice();

    let newArray = reverseArray(array.slice(1));

    if(array.length > 0) {
        newArray.push(array[0]);
    }

    return newArray;
}