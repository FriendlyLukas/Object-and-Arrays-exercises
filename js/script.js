//zadanie 1

console.log("mergeArrays(array1, array2");

const mergeArrays = (array1, array2) =>  [...array1, ...array2];

//zadanie 2

console.log("exceptFirst(element(1),...,element(n)");

const exceptFirst = (a, ...otherParameters) => {
    return [otherParameters];
}

//zadanie 3 

console.log("last2Parameters(parametr(1),...,parameter(n)");

const last2Parameters = (...elements) => elements.slice(-2);
console.log("Zadanie 3.", last2Parameters(2, 3, undefined, true));

console.log(last2Parameters(1,2)); 

//zadanie 4 
const indexOfElement = (element, array) => array.indexOf(element);
console.log("Zadanie 4.", indexOfElement("kawa", ["rum", "kawa", "sangria"]))

//zadanie 5 

console.log("findNonEmptyTask(object: {task: ?, done: ?})");

const findNonEmptyTask = (Array) => {
    console.log("First non empty task: ", Array.find(({content}) => content != ""));
}

//zadanie 6

console.log("oddIndex(array)");

const oddIndex = (Array) => {
    const isEven = number => number % 2 === 1;
    console.log("First odd number in array: ", Array.findIndex(isEven));  
} 

//zadanie 7

console.log("hasStrawberry(array)");

const hasStrawberry = (fruits) => fruits.includes("strawberry");

//zadanie 8

console.log("someAdult(object: {name: ?, age: ?})");

const someAdult = (persons) => {
    return persons.some(({age}) => age > 18);
}
 //zadanie 9

console.log("everyString(array)");

const everyString = (...array) => {
    return  array.every(element => typeof element === 'string' || element instanceof String);
}

 //zadanie 10

 console.log("filterPremium(array)");

const carBrands = ["Peugeot", "Audi", "BMW"];

const carBrandsPremium = ["Mercedes", "Audi", "BMW"];

const includesPremium = (carBrand) => carBrandsPremium.includes(carBrand);
const filterPremium = (carBrands) => carBrands.filter(includesPremium);

//zadanie 11

console.log("getColor(object: {car: ?, color: ?})");

const getColors = (...cars) => {
    const getColor = ({color}) => {color};
    return cars.map(getColor);

}
console.log(
    "Zadanie 11.",
    getColors(
        { car: "BMW X5", color: "black" },
        { car: "Peugeot 3008", color: "white" }
    )
);

//zadanie 12 

console.log("sortPeople(object: {name: ?, age: ?})");

const people = [
        {name: "Jan", age: "14"},
        {name: "Adam", age: "13"},
    ];
    const sortPeople = ([...people]) => people.sort((a, b) => a.age - b.age); 