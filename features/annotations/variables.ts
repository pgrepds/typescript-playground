let oranges: number = 42;

// assigning a different number works
oranges = 43;
// assigning a string does nto work, since oranges is of type number
// oranges = "test"

let hasValue: boolean = true;
// a value that is identical to its type
let nothing: null = null;
let nothingAtAll: undefined = undefined;

let now: Date = new Date();
// array is a variable that will be assigned an array that contains strings
let array: string[] = ['red', 'green', 'blue'];

// Classes
class Car { }
let car: Car = new Car();

// Object literal
let point: { x: number; y: number } = {
    x: 42,
    y: 42
};

// Function
const log: (message: string) => void = (message: string) => {
    console.log(message)
};

// When to use annotations
// 1) Function that returns the 'any' type
const json = '{"x": 10, "y": 20}';
// JSON.parse returns any. However, we can annotate it ourselves
const coordinates = JSON.parse(json)

const coordinatesTyped: { x: number; y: number } = JSON.parse(json)

// 2) When we declare a variable on one line and initialize it later
let words = ['red', 'green', 'blue'];
// either add a type annotation, or initialize the variable with a boolean value
let matchedWord: boolean;

for (let i = 0; i < words.length; i++) {
    if (words[i] === 'green') {
        matchedWord = true;
    }
}

// 3) Variable whose type cannot be inferred correctly
let numbers = [-10, -1, 12]
// this is generally bad coding style, since we want to assign two different types to the same variable,
// however, there are scenarios where this might be needed
// we can fix this using the or operator
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
        numberAboveZero = numbers[i];
    }
} 
