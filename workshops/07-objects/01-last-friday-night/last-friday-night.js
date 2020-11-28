// YOUR CODE BELOW
function lastFridayNight(array) {
    let sum = 0;

    for(i = 0; i < array.length; i++) {
        sum += array[i].amount;
    }

    return sum;
}