import React from "react";
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";

const Home = React.lazy(() => import("./container/pages/Home"));
const About = React.lazy(() => import("./container/pages/About"));

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </Router>
  )
}
export default App;
