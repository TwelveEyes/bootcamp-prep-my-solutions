// YOUR CODE BELOW
function myIndexOf(source, searchValue, startIdx) {
    if(startIdx === undefined) startIdx = 0;

    let index = 0;

    if(searchValue.length > 1) {
        for(i = startIdx; i <= source.length - searchValue.length; i++) {
            if(source.slice(i, i + searchValue.length) === searchValue) return i;
        }
    }

    for(i = startIdx; i < source.length; i++) {
        if(source[i] === searchValue) return i;
    }

    return -1;
}