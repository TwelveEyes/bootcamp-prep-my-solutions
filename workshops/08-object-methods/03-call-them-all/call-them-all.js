// YOUR CODE BELOW
function callThemAll(object, value) {
    let returnArray = [];

    for(key in object) {
        let objectValue = object[key];

        if(typeof objectValue === 'function') {
            let result = objectValue(value);

            returnArray.push(result);
        }
    }

    return returnArray;
}