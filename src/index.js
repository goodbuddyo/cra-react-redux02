

import React from "react";
//import ReactDOM from "react-dom/client";
import {createRoot} from 'react-dom/client';
import {BrowserRouter as Router} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./components/App";
import "./index.css";
import configureStore from "./redux/configureStore";
import {Provider as ReduxProvider} from "react-redux";
// react 18 has new setup for root
//const root=ReactDOM.createRoot(document.getElementById("root"));
const domNode=document.getElementById('root');
const root=createRoot(domNode);

const store=configureStore();

root.render(<ReduxProvider store={store}>
  <Router>
    <App />
  </Router>
</ReduxProvider>);

// see https://react.dev/reference/react-dom/client/createRoot



