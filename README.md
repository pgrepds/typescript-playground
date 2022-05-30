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
