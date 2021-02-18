import React, { ReactElement } from "react";
import { IntlProvider } from "react-intl";
import Cover from "./components/cover";
import Header from "./components/header";
import Offers from "./components/offers";
import WhySkyp from "./components/why-skip";
import GetStarted from "./components/get-started";
import Questions from "./components/questions";
import Footer from "./components/footer";
import AppMenu from "./components/app-menu";
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
