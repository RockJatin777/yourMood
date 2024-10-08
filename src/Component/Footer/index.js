import './index.css'

function Footer(){
    return(
        <footer>
        <div className='footer-detail-section'>
            <div className="footer">
                <h3>Useful Links</h3>
                <ul className="links">
                    <li>Home</li>
                    <li>Addiction</li>
                    <li>Anxiety</li>
                    <li>Depression</li>
                    <li>Get Help</li>
                </ul>
            </div>
            <div className="footer-contact">
                <h3>Contact Details</h3>
                <ul className="links">
                    <li>E-Mail : </li>
                    <li>Phone No. : +91-81xxxxxx47</li>
                    <li>Address : 121 East Main Street Riverhead, NY 11901, New York</li>
                </ul>
            </div>
        </div>
        <div className='copy'>
            <p className='copyright'>Copyrights &#169; All Rights Reserved - Your Mood || Designed With &#10084; By : Hack Squad</p>
        </div>
        </footer>
    )
}

export default Footer