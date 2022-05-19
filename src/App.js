import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Post from "./Components/Post";
import Links from "./Components/Links";
import TopDetails from "./Components/TopDetails";
/* eslint-disable */

const App = () => {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/Dashboard" element={<TopDetails />} />
          <Route path="/Posts" element={<Post />} />
          <Route path="/links" element={<Links />} />
        </Routes>
      </Router>
    </>
  );
};
export default App;