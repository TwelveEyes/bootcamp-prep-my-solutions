// YOUR CODE BELOW
function getDogBreeder(defaultName, defaultAge) {
    return function dogBreeder(name, age) {
        if(age === undefined){
            if(typeof name === 'number') {
                age = name;
                name = defaultName;
            }
            else age = defaultAge;
        }
        if(name === undefined) name = defaultName;
    
        let dog = {
            name: name,
            age: age
        };
    
        return dog;
    }
}