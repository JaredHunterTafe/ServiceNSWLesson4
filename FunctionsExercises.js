
// // Q1 Create a function that takes 3 parameters called floor, ceiling and num. All 3 parameters should be numbers. Return true if num is between floor and ceiling. Otherwise return false


// function findMiddle (floor, ceiling, num){

// if (floor > num && ceiling < num) {
//     return true}
// else {
//     return false }

// }

// console.log (findMiddle (1, 10, 5))



// Q2 Create a function that takes 1 parameter that is an object with 2 properties, name and age. Return true if the person's age is greater than 30 or their name contains the letter x (case insensitive). Otherwise return false.
let person = [
    {
        name: "Jane",
        age: 25
    },
    {
        name: "Bob",
        age: 40
    },
    {
        name: "Dana",
        age: 46
    },
    {
        name: "Jade",
        age: 19
    },
    {
        name: "Jim",
        age: 12
    }
];



function checkNameAndAge(person){
    let isOver30 = person.age > 30
    let hasX = false
    for (let i = person.name< person.name.length; i++) {
        let letter = person.name[i].toLowerCase()
        if(letter == "a"){
            foundX=true;
            break;
        }
    }
if(isOver30 || foundX){
    return true;
} else {
    return false;
}
}
