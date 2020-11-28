// YOUR CODE BELOW
function callCount() {
    let count = 0;

    return function() {
        return ++count;
    }
}