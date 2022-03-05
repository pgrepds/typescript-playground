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