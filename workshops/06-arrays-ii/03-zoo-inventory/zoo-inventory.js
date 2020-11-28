// YOUR CODE BELOW
function zooInventory(array) {
    let newArray = [];
    let name, species, age, s = '';

    for(x = 0; x < array.length; x++){
        for(y = 0; y < array[x].length; y++) {
            name = array[x][0];
            species = array[x][y][0];
            age = array[x][y][1];
            s = name + ' the ' + species +  ' is '  + age + '.';

            newArray[x] = s;
        }
    }

    return newArray;
}