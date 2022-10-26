import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Home,
  Error,
  PhyPage,
  ChemPage,
  MathsPage,
  Critics,
  Olevels,
  Ochempage,
  Oaddpage,
  Odpage,
  CompPage,
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
        <Route exact path="/computer" element={<CompPage />} />
        <Route exact path="/maths" element={<MathsPage />} />
        <Route exact path="/critics" element={<Critics />} />
        <Route exact path="/olevels" element={<Olevels />} />
        <Route exact path="/olevels/chemistry" element={<Ochempage />} />
        <Route exact path="/olevels/addmaths" element={<Oaddpage />} />
        <Route exact path="/olevels/mathsd" element={<Odpage />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
