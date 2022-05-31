// to avoid the type any[], we annotate empty initial arrays 
const dates: Date[] = [];

// we do not need this if we put initial values into the array
const dates2 = [new Date(), new Date()];

// two dimensional array
const X: number[][] = [[]];

// multiple different types in an array using type inference
const importantDates = [new Date(), '2030-10-10'];

// multiple different types in an array using type annotations
const importantDates2: (Date | string)[] = []
importantDates2.push(new Date())
// this will of course not verify if the pushed string is an actual valid date
importantDates2.push("2")
