// YOUR CODE BELOW
function sumDigits(num) {
    let numString = String(num);

    if(numString.length === 1) return num;

    let sum = 0;

    sum += parseInt(numString[0], 10) + sumDigits(Number(numString.slice(1)));

    return sum;
}