import * as React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Welcome from "./components/Welcome";
import Footer from "./components/Footer";
import Refreshing from "./components/Refreshing";

function App() {
  return (
    <div>
      <Header />
      <Refreshing />
      <Routes>
        <Route path="/" element={<Welcome />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
