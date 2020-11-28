// YOUR CODE BELOW
function countVowels(string) {
    if(string.length === 0) return 0;

    string = string.slice(0, string.length - 1);

    let count = countVowels(string);

    if(
        string[string.length - 1] === 'a' ||
        string[string.length - 1] === 'e' ||
        string[string.length - 1] === 'i' ||
        string[string.length - 1] === 'o' ||
        string[string.length - 1] === 'u'
    ) {
        return ++count;
    }

    return count;
}