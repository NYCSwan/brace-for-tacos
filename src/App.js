import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import styled from "styled-components";
import Home from "./containers/Home";
import MyTacos from "./containers/MyTacos";
import Footer from "./ui/Footer";
import Header from "./ui/Header";
import ThemeContext from "./utils/Context";
const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
`;

const App = () => {
  const themeHook = useState("lightgrey");
  return (
    <React.StrictMode>
      <ThemeContext.Provider value={themeHook}>
        <Router>
          <Header />
          <AppContainer>
            <Route exact path="/" component={Home} />
            <Route path="/tacos" component={MyTacos} />
          </AppContainer>
          <Footer />
        </Router>
      </ThemeContext.Provider>
    </React.StrictMode>
  );
};

export default App;
