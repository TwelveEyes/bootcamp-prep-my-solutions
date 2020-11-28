// YOUR CODE BELOW
function chainReaction(value, array) {
    array.forEach(element => {
        value = element(value);
    });

    return value;
}