# es6-module

An ES6 module boilerplate.

`git clone` and `npm install` to use. 

## About

This project is so you can easily create new JavaScript modules that have a few of the basic things you might need: A build process, unit tests, linting, and documenting. 

Modules are written in ES6, and built to AMD and CommonJS format so you you use them with tools like RequireJS and Webpack. The boilerplate uses the following tools:

- Babel for compiling to AMD & CommonJS
- Mocha for testing
- ESLint for linting
- ESDoc for documenting

Note: To generate documentation, you must install ESDoc globally. 

`npm install -g esdoc`

## Commands

| `npm run dev`  | Build src > dist folder and watch for changes. |
|----------------|---------------------------------------------------|
| `npm run dist` | Run linter and unit-tests, build src > dist folder. |
| `npm run lint` | Run the linter. |
| `npm run test` | Run the tests. |
| `npm run docs` | Generate documentation. |
