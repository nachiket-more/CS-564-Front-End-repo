import React from 'react';
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./componenets/Navbar/Navbar";

import Home from "./componenets/Home/Home";
import Houses from "./componenets/Houses/Houses";
import Search from "./componenets/Search/Search";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar />

          <Routes>
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/search" element={<Search />} />
            <Route exact path="/houses" element={<Houses />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
