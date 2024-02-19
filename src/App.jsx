import { React, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/NavigationComponent/Navbar";
import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About";
import AdminDashboard from "./Components/Pages/AdminDashboard";
import Footer from "./Components/Footer";
import Search from "./Components/Pages/Search";
import Request from "./Components/Pages/Request";
// import { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [navLinks, setNavLinks] = useState([
    { to: "/", text: "Home" },
    { to: "/about", text: "About Us" },
    { to: "/search", text: "Search" },
    { to: "/request", text: "Request" },
    { to: "/admindashboard", text: "Admin Login" },
  ]);

  // const navigate = useNavigate();
  // useEffect(() => {
  //   navigate('/');
  // }, []);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    if (page === "/" || page === "/about") {
      setNavLinks([
        { to: "/", text: "Home" },
        { to: "/about", text: "About Us" },
        { to: "/search", text: "Search" },
        { to: "/request", text: "Request" },
        { to: "/admindashboard", text: "Admin Login" },
      ]);
    }
    if (page === "/admindashboard") {
      setNavLinks([
        { to: "/admindashboard", text: "Dashboard" },
        { to: "/about", text: "Donors" },
        { to: "/patient", text: "Patients" },
        { to: "/donor", text: "Donations" },
        { to: "/patient", text: "Requests" },
        { to: "/", text: "Logout" },
      ]);
    }
  };

  return (
    <div className="m-0 p-0">
      <Navbar
        currentPage={currentPage}
        onPageChange={handlePageChange}
        navLinks={navLinks}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/admindashboard" element={<AdminDashboard />} />
        <Route path="/search/:pageText" element={<Search />} />
        <Route path="/request/:pageText" element={<Request />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
