"use strict"


{
    var someValue = true;
    {
        var someValue = false;
    }
    console.log(someValue);
}

{
    let someValue = true;

    {
        let someValue = false;
    }
    console.log(someValue)
}

function genericActionPerformer(genericAction, genericName){
    // do stuff..

    return genericAction(genericName);
}

const subtract = (name) => `${name} is subtracting.`;
const walk = (name) => `${name} is walking.`;


console.log(genericActionPerformer(subtract, "Tobias"));
console.log(genericActionPerformer(subtract, "Nicolas"));


