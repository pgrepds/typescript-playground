// we can define a function within an object and annotate its types.
const profile = {
    name: "david",
    age: 28,
    coords: {
        lat: 0,
        lng: 15
    },
    setAge(age: number): void {
        this.age = age;
    }
};

// we need to annotate the destructured values of the object profile one by one (we need to write out the expected structure
// of the destructured object)
const { age }: { age: number } = profile;

const { coords: { lat, lng } }: { coords: { lat: number; lng: number } } = profile;