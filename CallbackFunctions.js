let people = [ {
    name: "jared",
    message: "hello",
    age: 26
},{
    name: "katie",
    message: "hola",
    age: 25
}
]


function myGreeter(people, callback){
    for (let i= 0; i < people.length; i++) {
        let person = people[i];
        let gretting = callback(person.message);
            console.log(`${person.message} ${person.name}`)
    }
}

function myCallbackFunction(message) {
    if (message == "hi" || message == "hello") {
        return "hi";

    } else {
        return "hello there"
    }
}

myGreeter(people, myCallbackFunction)

// Array.filter

function myFilterFunction(person){
    if (person.name[0] == "k") {
        return true;
    } else {
        return false
    }
}

let filteredArray = people.filter(myFilterFunction);

console.log(filteredArray)

function getNames(person){
    return person.name;
}

let names = people.map(getNames);

console.log(names)

// array.find

function findUnder65 (person){
    return person.age = "25"
}

let person = people.find (findUnder65)

console.log (person)
