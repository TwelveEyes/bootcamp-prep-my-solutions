let letters = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];
let leetChars = ['@', '8', '(', '|)', '3', 'ph', 'g', '#','l', '_|', '|<', '1', "|'|'|", '/\/', '0', '|D', '(,)', '|2', '5', '+', '|_|', '|/', "|/|/'",'><', 'j', '2'];

// YOUR CODE BELOW
function leetTranslator(string) {
    let leetCodex = {};
    let newString = '';

    for(i = 0; i < letters.length; i++) {
        leetCodex[letters[i]] = leetChars[i];
    }

    for(i = 0; i < string.length; i++) {
        newString += leetCodex[string[i].toLowerCase()];
    }

    return newString;
}