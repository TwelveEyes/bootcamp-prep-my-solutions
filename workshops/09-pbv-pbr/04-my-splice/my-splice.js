// YOUR CODE BELOW
function mySplice(array, index, numRemove, addElement) {
    let keepArray = []; 
    let deleteArray = [];

    for(i = 0; i < index; i++) {
        keepArray.push(array[i]);
    }

    for(i = index; i < index + numRemove; i++) {
        deleteArray.push(array[i]);
    }

    if(addElement !== undefined) keepArray.push(addElement);
    
    for(i = index + numRemove; i < array.length; i++) {
        keepArray.push(array[i]);
    }

    while(array.length) {
        array.pop();
    }

    for(i = 0; i < keepArray.length; i++) {
        array.push(keepArray[i]);
    }

    return deleteArray;
}