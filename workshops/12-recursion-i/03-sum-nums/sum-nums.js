// YOUR CODE BELOW
function sumNums(num) {
    if(num === 1) return 1;

    let sum = num + sumNums(--num);
    
    return sum;
}