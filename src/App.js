import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Home,
  Error,
  PhyPage,
  ChemPage,
  MathsPage,
  Tooltip,
  Critics,
} from "./pages";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/physics" element={<PhyPage />} />
        <Route exact path="/chemistry" element={<ChemPage />} />
        <Route exact path="/maths" element={<MathsPage />} />
        <Route exact path="/tooltip" element={<Tooltip />} />
        <Route exact path="/critics" element={<Critics />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
