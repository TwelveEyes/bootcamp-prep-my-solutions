// YOUR CODE BELOW
function whosASpecial(array) {
    let returnString = '';

    array.forEach(element => {
        returnString += `${element.name} the ${element.species} is very special!`;
        if(array.indexOf(element) !== array.length - 1) returnString += ` `;
    });

    return returnString;
}