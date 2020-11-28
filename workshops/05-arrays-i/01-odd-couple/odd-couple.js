// YOUR CODE BELOW
function oddCouple(array) {
    let numOdd = 0;
    let newArray = [];

    for(i = 0; i < array.length; i++) {
        if(array[i] % 2 !== 0) {
            numOdd++;
            newArray[numOdd - 1] = array[i];
        }

        if(numOdd >= 2) break;
    }

    return newArray;
}