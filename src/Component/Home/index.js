import { Link } from 'react-router-dom'
import Footer from '../Footer'
import './index.css'

function Home(){
    
    return(
        <article className='home-container'>
            <main className="relax-container">
                <h1>Welcome to the Your Mood App</h1>
                <p>A healthy mind has wealthy soul <br /> Here we provide you the best solutions to your mental issues.</p>
                <h1>Just Breathe <br/> And Relax....</h1>
                <Link to={'/help'} className='link'><button className='help-btn'>Help</button></Link>
            </main>
            <section className="consent-container">
                    <h1 className='consent-heading'>What is bothering you</h1>
                    <div className="btn-container">
                        <Link to={'/anxiety'} className='link'><button className="btn">Anxiety</button></Link>
                        <Link to={'/stress'} className='link'><button className="btn">Stress</button></Link>
                        <Link to={'/depression'} className='link'><button className="btn">Depression</button></Link>
                        <Link to={'/emotion'} className='link'><button className="btn">Mood Swing</button></Link>
                    </div>
            </section>
            <Footer />
        </article>
    )
}
export default Home