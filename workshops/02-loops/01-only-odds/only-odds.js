// YOUR CODE BELOW
function onlyOdds(num) {
    let sum = 0;

    if(num < 1) return sum;

    for(i = 0; i < num; i++) {
        if(i % 2 > 0) sum += i;
    }

    return sum;
}