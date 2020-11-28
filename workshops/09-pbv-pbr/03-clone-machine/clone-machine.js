// YOUR CODE BELOW
function cloneMachine(object) {
    let cloneObject = {
        name: object.name + 'Clone',
        species: object.species,
        offspring: []
    }

    object.offspring.push(cloneObject.name);

    return cloneObject;
}