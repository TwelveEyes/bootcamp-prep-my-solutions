// YOUR CODE BELOW
function dogBreeder(name, age) {
    if(age === undefined){
        if(typeof name === 'number') {
            age = name;
            name = 'Steve';
        }
        else age = 0;
    }
    if(name === undefined) name = 'Steve';

    let dog = {
        name: name,
        age: age
    };

    return dog;
}