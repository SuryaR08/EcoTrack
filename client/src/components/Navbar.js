import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../App';
import '../Navbar.css';
import { useParams } from 'react-router-dom';


const Navbar = () => {
  const { userId } = useParams();
  const { authState, setAuthState } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleNavigation = (path) => {
    navigate(path);
    setMenuOpen(false); // Close menu on navigation
  };

  const logout = () => {
    localStorage.removeItem('accessToken');
    setAuthState({ username: '', role: '', status: false, id: null });
    handleNavigation('/');
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h1>EcoTrack</h1>
      </div>
      <div className={`navbar-menu ${menuOpen ? 'open' : ''}`}>
        <Link className="nav-link" to="/" onClick={() => handleNavigation('/')}>Home</Link>
        {!authState.status && (
          <>
            <Link className="nav-link" to="/login" onClick={() => handleNavigation('/login')}>Login</Link>
            <Link className="nav-link" to="/register" onClick={() => handleNavigation('/register')}>Register</Link>
          </>
        )}
        {authState.status && (
          <>
            {authState.role === 'admin' ? (
              <>
                <Link className="nav-link" to="/admin-dashboard" onClick={() => handleNavigation('/admin-dashboard')}>Admin Dashboard</Link>
                <Link className="nav-link" to="/schedule-allocation" onClick={() => handleNavigation('/schedule-allocation')}>Schedule Allocation</Link>
              </>
            ) : (
              <>
                <Link className="nav-link" to="/user-dashboard" onClick={() => handleNavigation('/user-dashboard')}>User Dashboard</Link>
                <Link className="nav-link" to="/schedules" onClick={() => handleNavigation('/schedules')}>My Schedules</Link>
              </>
            )}
            <Link className="nav-link" to={`/profile/${userId}`} onClick={() => handleNavigation('/profile')}>Profile</Link>
            <button className="logout-button" onClick={logout}>Logout</button>
          </>
        )}
      </div>
      <div className="menu-toggle" onClick={toggleMenu}>
        <div className={`hamburger ${menuOpen ? 'open' : ''}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
