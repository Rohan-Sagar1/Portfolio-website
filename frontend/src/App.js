import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
  return (
    <>
    <Header/>
    <Router>
        <Routes>
          <Route
            path="/"
            element={<Home/>}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
