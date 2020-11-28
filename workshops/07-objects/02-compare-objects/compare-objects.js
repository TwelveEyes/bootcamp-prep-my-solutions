// YOUR CODE BELOW
function compareObjects(object1, object2) {
    let keys1 = Object.keys(object1);
    let keys2 = Object.keys(object2);

    if(keys1.length !== keys2.length) return false;

    for(key of keys1) {
        if(object1[key] !== object2[key]) return false;
    }

    return true;
}