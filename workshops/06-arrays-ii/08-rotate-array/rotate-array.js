// YOUR CODE BELOW
function rotateArray(originalArray, rotateNum) {
    let a1 = originalArray.slice(-rotateNum);
    let a2 = originalArray.slice(0, -rotateNum);

    return a1.concat(a2);
}