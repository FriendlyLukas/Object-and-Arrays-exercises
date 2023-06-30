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

const last2Parameters = (firstParameter, ...otherParameters) =>{
    
    if (otherParameters.length === 0) {
        return [firstParameter]
    } if (otherParameters.length === 1) {
        return [firstParameter, ...otherParameters]
    } else {
        return [otherParameters.slice(-2,otherParameters.lenght)]
    }
}

console.log(last2Parameters(1,2)); 

//zadanie 4 

console.log("indexOf(searching element, array");

const indexOf = (element, array) => {
    console.log("Index of element: ", array.indexOf(element));
}

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

const hasStrawberry = (fruits) => {
   return fruits.includes("strawberry")
};

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

const getColors = (cars) => {
    const getColor = ({color}) => `${color}`;
    return cars.map(getColor);
}

//zadanie 12 

console.log("sortPeople(object: {name: ?, age: ?})");

const persons = [
        {name: "Jan", age: "14"},
        {name: "Adam", age: "13"},
    ];
    const getAge = ({age}) => `${age}`;
    const sortPeople = persons.sort((a,b) => getAge(a).localeCompare(getAge(b)));