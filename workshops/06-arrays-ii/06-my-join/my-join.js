// YOUR CODE BELOW
function myJoin(array, seperator) {
    if(seperator === undefined) seperator = ',';

    let s = '';

    for(i = 0; i < array.length; i++) {
        if(array[i] !== null && array[i] !== undefined) s += array[i];

        if(i < array.length - 1) s += seperator;
    }

    return s;
}