const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40
};

// as a tuple. This is an array like structure, but we enforce the order of types in this array
// we enforce some meaning to the order of the elements inside of an array
const pepsi: [string, boolean, number] = ['brown', true, 40];

// We could make use of type aliases as follows;
type Drink = [string, boolean, number];

const cola: Drink = ['black', true, 35];
