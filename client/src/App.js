import React, { createContext, useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UserDashboard from "./pages/UserDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import Schedules from "./pages/Schedules";
import ScheduleAllocation from "./pages/ScheduleAllocation";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProfilePage from "./pages/ProfilePage";
import "./App.css";
import axios from "axios";

const AuthContext = createContext();

function App() {
  const [authState, setAuthState] = useState({
    username: "",
    role: "",
    status: false,
    id: null,
  });

  useEffect(() => {
    axios
      .get("http://localhost:3001/auth/auth", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
      .then((response) => {
        if (response.data.error) {
          setAuthState((prevState) => ({ ...prevState, status: false }));
        } else {
          setAuthState({
            username: response.data.username,
            role: response.data.role,
            status: true,
            id: response.data.id,
          });
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <AuthContext.Provider value={{ authState, setAuthState }}>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/user-dashboard" element={<UserDashboard />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/schedules" element={<Schedules />} />
          <Route path="/schedule-allocation" element={<ScheduleAllocation />} />
          <Route path="/profile/:userId" element={<ProfilePage />} />
          <Route path="/home" element={authState.status ? <Home /> : <Navigate to="/login" />} />
        </Routes>
        <Footer />
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
export { AuthContext };
