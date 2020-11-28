// YOUR CODE BELOW
function myForEach(array, callback) {
    for(i = 0; i < array.length; i++) {
        callback(array[i], i)
    }
}