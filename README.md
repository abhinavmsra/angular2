## Intro

This repository is a basic CRUD Angular2 application, with an intention to learn Angular2 along with unit testing in it.

## Software Prerequisites

In order to run this project, the following software is required

### Git

See [Setting Up Git](https://help.github.com/articles/set-up-git/) from the GitHub guides.

### Node.js and npm

Node.js and Node's package manager, npm, are used for installing dependencies,
running the build steps, and running tests.


## Getting Started

Begin by cloning the repository.

Use npm to get dependencies:

`npm install`

Take a look at the `src` folder. All application and test code are placed here. Typings configuration are also placed in this folder in `tsconfig.json`.

### Build

The build step invokes the TypeScript compiler to create ES5 javascript
files and source maps from the `.ts` files. Run with:

`npm run build`

You can examine the configuration for the TypeScript compiler in `tsconfig.json`.
The generated files are output in the `dist` folder which provides as a destination to fetch pure `Javascript` files and also provides good separation of `Typescript` and `Javascript` files.

### Serve

The app uses `json-server` to simulate client-server communication. Follow the [GIT Repo](https://github.com/typicode/json-server) to configure it to run on port 3000.

To see the app, run

`npm run start`

and navigate to `localhost:3001`.

### Test

I used Karma with the `Jasmine` test framework to run unit tests. Try them with

`npm run test`

I have also used `karma-coverage` to generate the coverage report. The corresponding reports can be found under `coverage` directory.
