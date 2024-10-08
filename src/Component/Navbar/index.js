import { Link, useLocation} from 'react-router-dom';

import logo from '../Assets/logo.png';
import './index.css';

function Navbar() {
    const location = useLocation();
    const path = location.pathname;

    return (
        <header>
            <Link to={'/'} className='link'><img className='nav-logo' src={logo} alt="logo" /></Link>
            <nav>
                <Link className='link' to={'/'}>
                    <p className={path === '/' ? 'underline' : 'hoverline'}>Home</p>
                </Link>
                <div className="menu-container">
                    <p className={path === '/addiction' || path=== '/depression' || path === '/anxiety' ? 'drop-down underline' : 'drop-down hoverline'}>Conditions</p>
                    <div className="condition-card">
                        <Link className='link' to="/addiction"><p>Addiction</p></Link>
                        <Link className='link' to="/depression"><p>Depression</p></Link>
                        <Link className='link' to="/anxiety"><p>Anxiety</p></Link>
                    </div>
                </div>

                <Link to={'/therepy'} className='link'>
                    <p className={path === '/therepy' ? 'underline' : 'hoverline'}>Therapy</p>
                </Link>
                <div className="menu-container">
                    <p className={path === '/emotion' || path=== '/stress' || path === '/meditation' ? 'drop-down underline' : 'drop-down hoverline'}>Living Well</p>
                    <div className='condition-card'>
                        <Link className='link' to="/stress"><p>Manage Stress</p></Link>
                        <Link className='link' to="/meditation"><p>Meditation</p></Link>
                        <Link className='link' to="/emotion"><p>Emotion</p></Link>
                    </div>
                </div>

                <Link to="/help" className='link'>
                    <p className={path === '/help' ? 'underline' : 'hoverline'}>Get Help</p>
                </Link>
            </nav>
        </header>
    );
}

export default Navbar;

