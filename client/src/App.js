import React from "react";
import { AppNavbar } from "./components/AppNavbar";
import { Header } from "./components/Header";
import { AsleepAverage } from "./components/AsleepAverage";
import { SleepAnalysis } from "./components/SleepAnalysis";
import { AddData } from "./components/AddData";
import { AllRecordedData } from "./components/AllRecordedData";

import { GlobalProvider } from "./context/GlobalState";

import "./App.css";

const App = () => {
  return (
    <GlobalProvider>
      <AppNavbar />
      <Header />
      <div className="container">
        <AsleepAverage />
        <SleepAnalysis />
        <AddData />
        <AllRecordedData />
      </div>
    </GlobalProvider>
  );
};

export default App;
