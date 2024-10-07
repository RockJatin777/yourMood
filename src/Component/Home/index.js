import Footer from '../Footer'
import './index.css'

function Home(){
    
    return(
        <article className='home-container'>
            <main className="relax-container">
                <h1>Welcome to the Your Mood App</h1>
                <p>A healthy mind has wealthy soul</p>
                <h1>Just Breathe <br/> And Relax....</h1>
            </main>
            <section className="consent-container">
                    <h1 className='consent-heading'>How Are You Feeling Today</h1>
                    <div className="btn-container">
                        <button className="btn">Anxiety</button>
                        <button className="btn">Stress</button>
                        <button className="btn">Depression</button>
                        <button className="btn">Mood Swing</button>
                    </div>
            </section>
            <Footer />
        </article>
    )
}
export default Home