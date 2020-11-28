// YOUR CODE BELOW
function crazyCaps(s) {
    let newString = '';

    for(i = 0; i < s.length; i++) {
        if(i % 2 === 0) newString += s[i].toLowerCase();
        else newString += s[i].toUpperCase();
    }

    return newString;
}