// YOUR CODE BELOW
function veryOddMutant(array) {
    let count = 0;

    for(i = 0; i < array.length; i++) {
        if(array[i] % 2 === 0) {
            array[i] = 'normie';
            count++;
        }
    }

    return count;
}