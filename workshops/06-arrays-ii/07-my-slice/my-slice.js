// YOUR CODE BELOW
function mySlice(originalArray, startIdx, endIdx) {
    if(startIdx === undefined) startIdx = 0;
    if(endIdx === undefined) endIdx = originalArray.length;
    if(startIdx < 0) startIdx += originalArray.length;
    if(endIdx < 0) endIdx += originalArray.length;

    let newArray = [];

    for(i = startIdx; i < endIdx; i++) {
        newArray.push(originalArray[i]);
    }

    return newArray;
}