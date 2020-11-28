// YOUR CODE BELOW
function cacheSavings(callback) {
    let cache = {};

    return function(arg) {
        if(!(arg in cache)) cache[arg] = callback(arg);

        return cache[arg];
    }
}