// YOUR CODE BELOW
function frequencyAnalysis(string) {
    let charFrequency = {};

    for(i = 0; i < string.length; i++) {
        if(string[i] in charFrequency) charFrequency[string[i]]++;
        else charFrequency[string[i]] = 1;
    }

    return charFrequency;
}