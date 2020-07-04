import React, { ReactElement } from "react";
import "./App.css";
import Cover from "./components/Cover";
import Header from "./components/Header";
import Offers from "./components/Offers";
import WhySkyp from "./components/WhySkip";
import GetStarted from "./components/GetStarted";
import Questions from "./components/Questions";
import Footer from "./components/Footer";

function App(): ReactElement {
  return (
    <div className="App">
      <Header />
      <Cover />
      <Offers />
      <WhySkyp />
      <GetStarted />
      <Questions />
      <Footer />
    </div>
  );
}

export default App;
