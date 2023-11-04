import React, { useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { RewardBar } from './components/Rewardbar/RewardbarElement';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import {createNote} from "./Test"
import Home from "./pages/Homepage";
import Roadmap from "./pages/Roadmap";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Selection from "./pages/Selection";
import Assessment from "./pages/Assessment";
import Admin from "./pages/Admin";
import Score from "./pages/Score";

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
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/selection" element={<Selection />} />
        <Route path="/assessment" element={<Assessment />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/score" element={<Score />} />
      </Routes>
      <RewardBar />
    </Router>
  );
}

export default App;
