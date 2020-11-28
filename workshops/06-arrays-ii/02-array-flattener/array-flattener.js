// YOUR CODE BELOW
function arrayFlattener(array) {
    let newArray = [];
    let index = 0;

    for(i = 0; i < array.length; i++) {
        if(Array.isArray(array[i])) {
            for(x = 0; x < array[i].length; x++) {
                newArray[index] = array[i][x];
                index++;
            }
        }
        else {
            newArray[index] = array[i];
            index++;
        }
    }

    return newArray;
}