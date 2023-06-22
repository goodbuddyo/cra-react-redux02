import React from "react";
import {
  Route,
  Routes, // instead of "Switch"
} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import HomePage from "./home/HomePage";
import AboutPage from "./about/AboutPage";
import Header from "./common/Header";
import PageNotFound from "./PageNotFound";
import TopicsPage from "./topics/TopicsPage";

function App() {
  return (
    <Container className="container-fives">
      <Row>
        <Col className="my-head">
          <Header />
          <h4 className="my-subhead">5 Steps To 5 Star Websites</h4>
        </Col>
      </Row>
      <div className="mymain-section">

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/topics" element={<TopicsPage />} />
          <Route element={<PageNotFound />} />
        </Routes>

      </div>
    </Container>
  );
}

export default App;
