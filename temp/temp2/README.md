# Starter Kit for [Building Applications in React and Redux](http://www.pluralsight.com/author/cory-house) on Pluralsight

This app is based on a very thorough, line by line, 6.5 hour video tutorial demonstrating how to implement Redux in a React 17 app using an Express/json-server mock api. Cory House is the man.

## Get Started

1. **Install [Node 8](https://nodejs.org)** or newer. 
2. **Navigate (cd) to this project's directory.**
3. **`npm install`** - 
4. **`npm start`** - 


### Json-Server mock api
This project uses the package npm-run-all which enables both the web server (React app) and the json-server to start in parallel with one "npm start" command. 
    "start": "run-p start:dev start:api"
The "run-p" in the start script stands for "run-parallel". This means only one repo is required for both web server and json-server files. The api scripts are located in the src/api folder

### Initial attempt at CRA
The first few commits for this repo start with a blank create-react-app instance followed by a basic React page layout and navigation. Things were looing good. But then, while building the Redux structure and setting up the api calls, the webpack config used by CRA was not happy with the methods used in the Redux tutorial I was following.  Stack overflow said you can revise the webpack config in CRA with the react-app-rewired package, but I had no success with that.  I lost several days trying to fix this.  In the end, I had to escape out of CRA and use the older custom webpack config used in this React 17 Redux topic. I also made the mistake of experimenting with the React-Bootstrap Carousel on the homepage early on. It looked pretty awesome, until it stopped working with the older config. The React-Bootstrap Carousel brought me into React Router 6 which also conflicted with the older React 17 config and had to be reverted to v 5. Can you say: F-R-U-S-T-R-A-T-I-N-G?

### Port designations
The .env file and package.json file direct the React app to run on 
  port 3003
The webpack.config and tools/apiServer.js files direct json-server to run on 
  port 3005

### Stopping a local server on a Mac
On a mac, Ctrl + C does seem not stop either the web app or the json-server app
What dpes seem to work is 
  lsof -i tcp:3003
This will return the [PID] number which can then be used to kill the instance
Copy the [PID] and then run
  kill -9 [PID]
Repeat this process for port 3005


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
