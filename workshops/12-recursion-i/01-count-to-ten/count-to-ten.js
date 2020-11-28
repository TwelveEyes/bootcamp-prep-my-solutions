// YOUR CODE BELOW
function countToTen(num) {
    if(num <= 10) {
        console.log(num);
        countToTen(++num);
    }
}