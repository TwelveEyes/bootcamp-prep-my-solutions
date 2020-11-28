// YOUR CODE BELOW
function zeroDarkThirty(arg) {
    if(arg === 0) return NaN;
    return mySlice(arg);
}

function mySlice(arg) {
    let numString = arg.toString();
    let newString = '';

    for(i = 0; i < numString.length; i++) {
        if(numString[i] !== '0') newString += numString[i];
    }

    return parseInt(newString, 10);
}