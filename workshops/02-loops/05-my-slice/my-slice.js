// YOUR CODE BELOW
function mySlice(originalString, startIdx, endIdx) {
    if(startIdx === undefined) startIdx = 0;
    if(endIdx === undefined) endIdx = originalString.length;

    let s = '';

    for(i = startIdx; i < endIdx; i++) {
        s += originalString[i];
    }

    return s;
}