import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ToDoList from "./pages/ToDoList";
import Calender from "./pages/Calender";
import Reminders from "./pages/Reminders";
import Planning from "./pages/Planning";
import History from "./pages/History";
import OurTeam from "./pages/OurTeam";
import Blog from "./pages/Blog";
import NotFoundPage from "./pages/NotFoundPage";
import Careers from "./pages/Careers";
import About from "./pages/About";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todolist" element={<ToDoList />} />
        <Route path="/calender" element={<Calender />} />
        <Route path="/reminders" element={<Reminders />} />
        <Route path="/planning" element={<Planning />} />
        <Route path="/history" element={<History />} />
        <Route path="/ourteam" element={<OurTeam />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/about" element={<About />} />
        {/* Page incase the url does not match any existing pages */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
