// YOUR CODE BELOW
function onlyOne(arg1, arg2, arg3) {
    if( (!!arg1 && !arg2 && !arg3) ||
        (!arg1 && !!arg2 && !arg3) ||
        (!arg1 && !arg2 && !!arg3) ) return true;
    return false;
}