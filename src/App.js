import React from 'react';
import logo from './swan_logo.png';
import { BrowserRouter as Router, Route } from "react-router-dom";
import styled from "styled-components";
import Home from "./containers/Home";
import Footer from "./ui/Footer";

const AppContainer = styled.div`
  text-align: center;
`;

function App() {
  return (
    <Router>
          <AppContainer>
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
            </header>
            <Route exact path="/" component={Home} />
          </AppContainer>
          <Footer />
        </Router>
  );
}

export default App;
