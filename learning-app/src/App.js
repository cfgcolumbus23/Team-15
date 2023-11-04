import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Home from "./pages/Homepage";
import Roadmap from "./pages/Roadmap";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Selection from "./pages/Selection";
import Assessment from "./pages/Assessment";
import Admin from "./pages/Admin";
import Score from "./pages/Score";
import Mycourses from "./pages/mycourses";
import Profile from "./pages/Profile";
import Footer from "./components/Footer/Footer";
import Calendar from "./pages/Calendar";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>  
        <Route path="/roadmap" element={<Roadmap />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/selection" element={<Selection />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/Mycourses" element={<Mycourses />} />
        <Route path="/assessment" element={<Assessment />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/score" element={<Score />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Calendar" element={<Calendar />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
