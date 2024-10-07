import './index.css'

function Footer(){
    return(
        <footer>
        <div className='footer-detail-section'>
            <div class="footer">
                <h3>Usefull Links</h3>
                <ul class="links">
                    <li>Home</li>
                    <li>Addiction</li>
                    <li>Anxiety</li>
                    <li>Depression</li>
                    <li>Get Help</li>
                </ul>
            </div>
            <div class="footer-contact">
                <h3>Contact Details</h3>
                <ul class="links">
                    <li>E-Mail : </li>
                    <li>Phone No. : +91-81xxxxxx47</li>
                    <li>Address : 121 East Main Street Riverhead, NY 11901, New York</li>
                </ul>
            </div>
        </div>
        <div>
            <p className='copyright'>Copyrights &#169; All Rights Reserved - Your Mood || Designed With &#10084; By : Your-Mood Team</p>
        </div>
        </footer>
    )
}

export default Footer