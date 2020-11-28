// YOUR CODE BELOW
function bacteriaTime(currentNum, targetNum) {
    if(currentNum > targetNum) return 'targetNum must be larger than currentNum';

    let time = 0;

    while(currentNum < targetNum) {
        time += 20;
        currentNum *= 2;
    }

    return time;
}