import logo from '../Assets/logo.png'
import './index.css'

function Navbar(){
    return(
        <header>
            <img className='nav-logo' src={logo} alt="logo" />
            <nav>
                <p>Home</p>
                <select>
                    <option>Conditions A-Z</option>
                    <option>Adiction</option>
                    <option>Depression</option>
                    <option>Anxiety</option>
                </select>
                <select> 
                    <option>Living Well</option>
                    <option>Managing Stress</option>
                    <option>Meditation</option>
                </select>
                <p>Psychology</p>
            </nav>
         </header>
    )
}

export default Navbar