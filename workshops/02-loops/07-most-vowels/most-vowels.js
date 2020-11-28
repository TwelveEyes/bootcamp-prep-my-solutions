// YOUR CODE BELOW
function mostVowels(s) {
    let newString = '';
    let vowels = 0;
    let prevVowels = 0;

    for(i = 0; i < s.length; i++) {
        let word = s.slice(i, s.indexOf(' ', i))

        for(x = 0; x < word.length; x++) {
            if(word[x].toLowerCase() === 'a' || word[x].toLowerCase() === 'e' || word[x].toLowerCase() === 'i' || word[x].toLowerCase() === 'o' || word[x].toLowerCase() === 'u') vowels += 1;
        }

        if(vowels > prevVowels) {
            prevVowels = vowels;
            newString = word;
        }

        vowels = 0;
    }

    return newString;
}