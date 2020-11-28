// YOUR CODE BELOW
function backwardString(string) {
    if(string.length > 0) {
        console.log(string[string.length - 1]);
        string = string.slice(0, string.length - 1)
        backwardString(string);
    }
}