## CRA-React-Redux02

This app is based on a very thorough, line by line, 6.5 hour video tutorial demonstrating how to implement Redux in a React 17 app using an Express/json-server mock api. Cory House is the man.

[Building Applications in React and Redux](http://www.pluralsight.com/priority/cory-house) 

### Get Started

1. **Install [Node 8](https://nodejs.org)** or newer. 
2. **Download or clone the repo**
3. **Navigate (cd) to the project folder.**
4. **`npm install`** - 
5. **`npm start`** - 

### Json-Server mock api
This project uses the npm-run-all package which enables both the web server (React app) and the json-server to start in parallel with a single "npm start" command. 
    "start": "run-p start:dev start:api"
The "p" in "run-p" stands for "run-parallel". This means only one repo is required for both web server and json-server files. The api scripts are located in the src/api folder

### Initial attempt at CRA
This repo started with a blank create-react-app instance (React v 18.2.0) and react-router-dom (v6.13.0). I decided to explore using Redux with this project. Unfortunately, the webpack config used by CRA conflicted with several packages in the Redux tutorial I was following.  I attempted several fixes including the react-app-rewired package, but was unsuccessful.  I lost a day or so trying to find a fix I eventually opted out of the CRA config and used an older custom webpack config that worked with React 17 and react-redux v7.2.4. 
Some of the other packages reverted due to conflicts included React-Bootstrap v1 and React Router v5.

### Port designations
The .env file and package.json file direct this React app to run on 
  port 3003  
The webpack.config and tools/apiServer.js files direct json-server to run on 
  port 3005  

### Stopping a local server on a Mac
On a mac, Ctrl + C does seem not stop either the web app or the json-server app
What does seem to work is 
  lsof -i tcp:3003 
This will return the [PID] number which can then be used to kill the instance
Copy the [PID] and then run
  kill -9 [PID]
Repeat this process for port 3005

### Initial stage of 5-5s.com app
The purpose of this repo is to satify the requirements of the Flatiron phase 2 project. 
The goal is to continue this project to complete a working live beta of the 5-5s.com app 

###  Dependencies of interest

| **Dependency**   | **Use**                                              |
| ---------------- | ---------------------------------------------------- |
| bootstrap        | CSS Framework                                        |
| immer            | Helper for working with immutable data               |
| prop-types       | Declare types for props passed into React components |
| react            | React library                                        |
| react-dom        | React library for DOM rendering                      |
| react-redux      | Connects React components to Redux                   |
| react-router-dom | React library for routing                            |
| react-toastify   | Display messages to the user                         |
| redux            | Library for unidirectional data flows                |
| redux-thunk      | Async redux library                                  |
| reselect         | Memoize selectors for performance                    |

### Dev Dependencies of interest

| **Dependency**                     | **Use**                                                          |
| ---------------------------------- | ---------------------------------------------------------------- |
| @babel/core                        | Transpiles modern JavaScript so it runs cross-browser            |
| babel-eslint                       | Lint modern JavaScript via ESLint                                |
| babel-loader                       | Add Babel support to Webpack                                     |
| babel-preset-react-app             | Babel preset for working in React. Used by create-react-app too. |
| css-loader                         | Read CSS files via Webpack                                       |
| cssnano                            | Minify CSS                                                       |
| eslint                             | Lints JavaScript                                                 |
| eslint-loader                      | Run ESLint via Webpack                                           |
| eslint-plugin-import               | Advanced linting of ES6 imports                                  |
| eslint-plugin-react                | Adds React-related rules to ESLint                               |
| fetch-mock                         | Mock fetch calls                                                 |
| html-webpack-plugin                | Generate HTML file via webpack                                   |
| http-server                        | Lightweight HTTP server to serve the production build locally    |
| json-server                        | Create mock API that simulates create, update, delete            |
| mini-css-extract-plugin            | Extract imported CSS to a separate file via Webpack              |
| node-fetch                         | Make HTTP calls via fetch using Node - Used by fetch-mock        |
| npm-run-all                        | Display results of multiple commands on single command line      |
| postcss                            | Post-process CSS                                                 |
| postcss-loader                     | Post-process CSS via Webpack                                     |
| redux-immutable-state-invariant    | Warn when Redux state is mutated                                 |
| redux-mock-store                   | Mock Redux store for testing                                     |
| rimraf                             | Delete files and folders                                         |
| style-loader                       | Insert imported CSS into app via Webpack                         |
| webpack-dev-server                 | Serve app via Webpack                                            |
