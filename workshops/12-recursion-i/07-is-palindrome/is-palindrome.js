// YOUR CODE BELOW
function isPalindrome(string) {
    if(string.length === 1) return true;

    let firstChar = string[0].toLowerCase();
    let lastChar = string[string.length -1].toLowerCase();

    if(firstChar === lastChar) {
        return isPalindrome(string.slice(1, string.length - 1));
    }

    return false;
}