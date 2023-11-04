import React, { useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { RewardBar } from './components/Rewardbar/RewardbarElement';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import {createNote} from "./Test"
import Home from "./pages/Homepage";
import Roadmap from "./pages/Roadmap";
import Login from "./pages/Login";
import Selection from "./pages/Selection";
import Admin from "./pages/Admin";

function App() {
  // useEffect(()=>{
  //   createNote()
  // })
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/roadmap" element={<Roadmap />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/selection" element={<Selection />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
      <RewardBar />
    </Router>
  );
}

export default App;
