import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Error, PhyPage, ChemPage, MathsPage, Tooltip } from "./pages";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/physics" element={<PhyPage />} />
        <Route exact path="/chemistry" element={<ChemPage />} />
        <Route exact path="/maths" element={<MathsPage />} />
        <Route exact path="/tooltip" element={<Tooltip />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;

// auto copy recording, apperently onclick doesnt work on the tree.file
