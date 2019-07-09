import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import styled from "styled-components";
import Home from "./containers/Home";
import Footer from "./ui/Footer";
import Header from "./ui/Header";

const AppContainer = styled.div`
  text-align: center;
`;

function App() {
  return (
    <Router>
      <Header />
          <AppContainer>
            <Route exact path="/" component={Home} />
          </AppContainer>
          <Footer />
        </Router>
  );
}

export default App;
