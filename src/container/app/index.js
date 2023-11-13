import React from "react";
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import { Home , About , Navbar} from "../pages";

const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </Router>
  )
}
export default App;
