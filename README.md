# Typescript-playground

The following repository contains code for exploring Typescript which I have created during a Udemy course, namely

- Typescript: The Complete Developer's Guide

## Overview

Typescript is Javascript combined with a type system, thus we are actually still writing Javascript but adding a little bit of additional syntax in order to have a type systems in Javascript.

Why a Type system?

- It helps us to catch errors during development
- It uses type annotations to analyze our code
- It is only active during development
- It does not provide any performance optimization

Typescript Code
(JS with type annotations)

        |
        |
        |

Typescript Compiler

        |
        |
        |

Plain old Javascript

**Summary:**

- Writing Typescript is the same as writing Javascript with some extra documentation
- Typescript has no effect on how our code gets executed by the browser or Node
- It is best of think of Typescript as being like a friend sitting behind you while you are coding

#### Environment Setup

First, we are going to install the typescript compiler using `npm` as follows.

```bash
npm install typescript ts-node
```

#### A First App

We make a network request to fetch some JSON and print the result.

Take a look at the API we'll use to fetch data

        |
        |
        |

Create a new project directory

        |
        |
        |

Create a package.json file

        |
        |
        |

Install axios to make a request

        |
        |
        |

Write code

We are going to use [a fake api](http://jsonplaceholder.typicode.com/) for developing our test application.

#### Compile Typescript code

We have created new file called `index.ts` in which we have made a GET request using axios. We now, need to compile this code to plain Javascript as follows.

```bash
npx tsc index.ts
```

Notice that most google searches uses `tsc` directly but this only works if we have installed typescript globally which is not necessary at all. Using `npx` we use the local npm packages.

The above command will generate a new file called `index.js` which is the Javascript code corresponding to our Typescript file.

We are now able to run the created Javascript file using `node` by simply executing the following command.

```bash
node index.js
```

Since we have also installed `node-ts`, we can execute both commands at once using

```bash
npx ts-node index.ts
```

#### Basic Type Definitions in Typescript

Informally, a type is an easy way to refer to the different properties and functions that a value has. In that sense,
a value is anything that can be assigned to a variable.

Example: "red". First, this is a string. Second, it is a value that has all the properties and methods that we assume that a string has. This includes functions like `charAt`, `concat`, and so on. We use types as a shortcut to describe what methods and properties a value, in this case "red", has.

We have, generally speaking, two different categories of types.

- **Primitive Types:** number, boolean, void, undefined, string, symbol, null
- **Object Types:** functions, arrays, classes, objects

There are two good reasons to use types. Types are used by the Typescript Compiler to analyze our code for errors. Types allow other engineers to understand what values are flowing around our codebase.

#### Type Annotations and Type Inference

A type annotation is a piece of code that we add to tell Typescript what type of value a variable will refer to. Type inference is the process of Typescript trying to figure out what type of value a variable refers to. In other words, with type annotations the developer tells Typescript the type of a value while type inference leaves this process completely to Typescript (Typescript 'guesses' the type of the variable).

If we declare and initialize a variable on the same line, Typescript will figure out the type for us. Here is an example.

```javascript
const color = 'red';
```

The code on the left-hand-site of the equal sign is called `variable declaration`. The code on the right-hand-site is called `variable initialization`. However, if we move the variable assignment to a new line, then this will not work (Typescript will assign the type `any` in this case).

There are scenarios where we cannot rely on type inference. In general, there are three different scenarios which are as follows.

- When a functions returns the `any` type, we need to clarify the value
- When we declare a variable on one line then initialize it later
- When we want a variable to have a type that can not be inferred

On the type `any`: the type `any` is a type just as `string` or `boolean`. It means that Typescript has no idea what the type of the variable is. It can not check for correct property references. We should avoid variables with the `any` type at all costs.

#### Inference around functions

```javascript
const mult = (a: number, b: number): number => {
    return a * b;
};
```

We add annotations for the input parameters and for the return type of the functions. In the above example, the function `mult` receives two parameters of type `number` and returns a value of type `number`.

The return type can be determined by typescript using type inference.

```javascript
const mult = (a: number, b: number) => {
    return a * b;
};
```

However, typescript can not know what we actually want to return. Hence, the following is totally valid, but might not be the intended code.

```javascript
const mult = (a: number, b: number) => {
    a * b;
};
```

If we hove over the function definition, it will tell us that we are returning `void`. However, there is of course no error. In that sense, it is better to explicitly add the return type to prevent this kind of bugs.

#### The type void and never

```javascript
const logger = (message: string): void => {
    console.log(message);
};
```

We use the type `void` to annotate a function that return nothing. Technically, a function that returns void can return null or undefined. Thus the following is totally valid.

```javascript
const logger = (message: string): void => {
    console.log(message);
    return null
};
```

```javascript
const logger = (message: string): void => {
    console.log(message);
    return undefined
};
```

Consider the following function.

```javascript
const throwError = (message: string): never => {
    if (!message) {
        throw new Error(message)
    }
}
```

We use the return type `never` to annotate the fact that the function will in fact never return the end. For the above example, this is not totally true, since `message` could not be undefined. Thus, using `void` is valid here as well.

#### Typed Arrays

There are a couple of reasons why typing arrays is important.

- TS can infer the type when we extract values from the array.
- TS can prevent us from adding values of a different type to the array
- Array functions like map, forEach or reduce will infer the correct type as well.
- We can still allow multiple types inside an array using the or syntax.

#### Tuples in Typescript

A tuple is an array-like structure where each element represents some property of a record. 
Other then representing rows of a CSV file, tuples are not that useful in typescript because we loose a lot of information about the data we want to represent.

Take the following artificial example.

```javascript
const carSpecs: [number,  number] = [400, 3354];
```

How do we know what each of the above numbers represent? We do not. We have lost this information and it must be implicitly known by the developers. On the other hand, if we represent the same structure as an object, we preserve this information.

```javascript
const carSpecs = {
    horsepower: 400,
    weight: 3354
}
```

#### Interfaces in Typescript

An interface is a new type, describing the property names and value types of an object.

#### Classes in Typescript

Loosely speaking, a class is a blueprint for creating an object with some fields (values) and methods (functions) to represent a 'thing'.

The modifiers of a class are pretty much the same as they are in Java.

- **public:** Can be called any where, any time,
- **private:** Can only be called by other methods in the same class,
- **protected:** Can be called by other methods in the same class, or by other methods in child classes.

Interfaces and classes are the main tools in order to reuse code in Typescript.

#### Design Patterns with Typescript

We are going to implement a basic web application that randomly generates a user and a company and display their locations on a map in the browser.

We are going to use `parcel`. We install it as follows.

```bash
npm install -g parcel-bundler
```

We generate a new project folder named `maps`.

```bash
mkdir maps
```

Parcel will recieve the `index.html` file and will parse typescript files referenced inside `index.html` to Javascript and replace them inside the `<script>` tags.

This is done by the following command.

```bash
parcel index.html
```

By convention, we start a ts file whose purpose it is to export a class by a capital letter. A file whose main purpose it is to import and to initialize classes will start with a lower case letter (i.e. `index.ts`).

Some notes on the use of JS libraries in typescript. Typescript uses so called type definitions files as an adapter layer between typescript code and a JS library. These files include and export all the needed types of the JS library. They are either installed automatically with the JS library or need to be installed manually.

Most of the types are located in a project called `Definitely Typed` and it uses the following naming scheme:

> @types/{library-name}

All these types can be installed as usual using `npm`.

A quick note on default exports. A default export is an export from an module that uses the keyword `default` like the following example.

```javascript
export default 'red';
```

We can import it by not using curly braces as we do for named exports.

```javascript
import red from './whateverPath';
```

However, we can name the import however we like, i.e. the following is totally valid.

```javascript
import color from './whateverPath';
```

Notice that we do not recommend to use default exports at all since it makes it very difficult to refactor code in the future (i.e. if the import is renamed at several places and we want to change the export to a named export). Thus, we will not use default exports at all. This is actually also a convention for typescript.

##### Global Variables in Typescript

By adding script files directly to `index.html` like we did with google, we have added a global variable which Typescript is not aware of. In order to fix this problem, we need to add the Typescript definition scheme. For google this is called `@types/google.maps`. This will tell Typescript that there exists a global variable named `google`.

### Interfaces in Typescript

We note that it is not necessary for a class in Typescript to implement an interface in order to satisfy it. Typescript will check behind the scenes if the given object contains the properties the interface demands. Here is a quick example.

```javascript
interface Foo {
    a: number,
    b: number,
}

class A {
    a: number;
    b: number;
    c: string;
    constructor(a: number, b: number, c: string) { }
}

class B {
    a: number;
    b: number;
    c: string;
    d: string;
    constructor(a: number, b: number, c: string, d: string) { }
}

function doX(param: Foo) {
    console.log(param.a, param.b)
}

const a = new A(1, 2, "Hello");
const b = new B(3, 4, "World!", "X");

// this will work, since TS will check if both a and b satisfy the interface Foo
// there is no need to implicitly implement it as in Java for example.
doX(a);
doX(b);
```

However, it is usually advised to implicitly implement the interface that we want to use in order to help typescript to spot possible implementation errors directly in the classes in which they occur.

This is done the same way as in Java.

```javascript
class A implements Foo {
    a: number;
    b: number;
    c: string;
    constructor(a: number, b: number, c: string) { }
}
```
