// YOUR CODE BELOW
function evenAndOdd(array) {
    let even = [];
    let odd = [];
    let newArray = [even, odd];
    let indexEven = 0;
    let indexOdd = 0;

    for(i = 0; i < array.length; i++) {
        if(array[i] % 2 === 0) {
            even[indexEven] = array[i];
            indexEven++;
        }
        else if(array[i] % 2 !== 0) {
            odd[indexOdd] = array[i];
            indexOdd++;
        }
    }

    return newArray;
}