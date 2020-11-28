// YOUR CODE BELOW
function exponentiate(base, power) {
    if(power === 0) return 1;

    let result = base;

    for(i = 0; i < power - 1; i++) {
        result *= base;
    }

    return result;
}