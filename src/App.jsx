import React, { useState } from 'react';
import Header from "./components/Header/Header.jsx";
import Examples from "./components/Examples.jsx";
import Stats from "./components/Stats.jsx";
import Statistics from "./components/Statistics.jsx";
// import { ChartJs, Tooltip, Title, ArcElement, Legend } from "chart.js";
// ChartJs.register(
//   Tooltip, Title, ArcElement, Legend
// );

//import SemicirclePieChart from "./components/SemicirclePieChart/SemicirclePieChart.jsx";

//import Navbar from "./components/NavBar/Navbar.jsx";

//import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {

  return (
    <>
      {/* <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact />
        </Switch>
      </Router> */}
      <Header />
      <main>
        <Examples />
        <Stats />
        <Statistics />
        <h2>Time to get started!</h2>
      </main>
    </>
  );

}

export default App;