import { Link, useLocation, useNavigate } from 'react-router-dom';

import logo from '../Assets/logo.png';
import './index.css';

function Navbar() {
    const location = useLocation();
    const navigate = useNavigate();
    const path = location.pathname;

    const handleNavigate = (event) => {
        const value = event.target.value;
        if (value) {
            navigate(value);
        }
    };

    return (
        <header>
            <img className='nav-logo' src={logo} alt="logo" />
            <nav>
                <Link className='link' to={'/'}>
                    <p className={path === '/' ? 'underline' : null}>Home</p>
                </Link>
                <Link to={'/therepy'} className='link'>
                    <p className={path === '/therepy' ? 'underline' : null}>Therepy</p>
                </Link>
                <select onChange={handleNavigate}>
                    <option value='/'>Conditions</option>
                    <option value="/addiction">Addiction</option>
                    <option value="/depression">Depression</option>
                    <option value="/anxiety">Anxiety</option>
                </select>

                <select onChange={handleNavigate}>
                    <option value='/'>Living Well</option>
                    <option value="/stress">Manage Stress</option>
                    <option value="/meditation">Meditation</option>
                    <option value="/emotion">Emotion</option>
                </select>

                <Link to="/help" className='link'>
                    <p className={path === '/help' ? 'underline' : null}>Get Help</p>
                </Link>
            </nav>
        </header>
    );
}

export default Navbar;

