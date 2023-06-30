import React from "react";
import {Route,Switch} from "react-router-dom";
import HomePage from "./home/HomePage";
import AboutPage from "./about/AboutPage";
import Header from "./common/Header";
import PageNotFound from "./PageNotFound";
import TopicsPage from "./topics/TopicsPage";
import ManageTopicPage from "./topics/ManageTopicPage";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="container-fives">
      <Header />
      <h4 className="my-subhead">5 Steps To 5 Star Websites</h4>
      <div className="mymain-section">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/topics" component={TopicsPage} />
          <Route path="/topic/:slug" component={ManageTopicPage} />
          <Route path="/topic" component={ManageTopicPage} />
          <Route component={PageNotFound} />
        </Switch>
        <ToastContainer autoClose={3000} hideProgressBar />
      </div>
    </div>
  );
}

export default App;
