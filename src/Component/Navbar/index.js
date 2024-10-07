import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import logo from '../Assets/logo.png';
import './index.css';

function Navbar() {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

    return (
        <header>
            <img className='nav-logo' src={logo} alt="logo" />
            <nav>
                <Link className='link' to={'/'}><p>Home</p></Link>
                <div className="dropdown">
                    <button className='nav-btn' onClick={toggleDropdown}>Conditions A-Z</button>
                    {dropdownOpen && (
                        <ul>
                            <li><Link to="/addiction">Addiction</Link></li>
                            <li><Link to="/depression">Depression</Link></li>
                            <li><Link to="/anxiety">Anxiety</Link></li>
                        </ul>
                    )}
                </div>
                <div className="dropdown">
                    <button className='nav-btn' onClick={toggleDropdown}>Living Well</button>
                    {dropdownOpen && (
                        <ul>
                            <li><Link to="/managing-stress">Managing Stress</Link></li>
                            <li><Link to="/meditation">Meditation</Link></li>
                        </ul>
                    )}
                </div>
                <p>Psychology</p>
            </nav>
        </header>
    );
}

export default Navbar;
