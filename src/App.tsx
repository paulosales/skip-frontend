import React, { ReactElement } from "react";
import { IntlProvider } from "react-intl";
import Cover from "./components/Cover";
import Header from "./components/Header";
import Offers from "./components/Offers";
import WhySkyp from "./components/WhySkip";
import GetStarted from "./components/GetStarted";
import Questions from "./components/Questions";
import Footer from "./components/Footer";
import AppMenu from "./components/AppMenu";
import { useSelector } from "react-redux";
import { RootState } from "./redux/root-reducer";
import getMessages from "./messages";

import "./App.css";

function App(): ReactElement {
  const { selectedLanguage } = useSelector(
    (state: RootState) => state.languageSelector
  );

  return (
    <IntlProvider
      locale={selectedLanguage}
      messages={getMessages(selectedLanguage)}
    >
      <div className="App">
        <Header />
        <Cover />
        <Offers />
        <WhySkyp />
        <GetStarted />
        <Questions />
        <Footer />
        <AppMenu />
      </div>
    </IntlProvider>
  );
}

export default App;
