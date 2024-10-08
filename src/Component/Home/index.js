import { Link } from 'react-router-dom'
import Footer from '../Footer'
import './index.css'
import { useEffect, useState } from 'react'

function Home(){

    const [symptons, setSymptons] = useState('select');

    const onHandleChange = e => {
        setSymptons(e.target.value)
    }

    
    useEffect(() => {
        const fetchData = async () => {
            if (!symptons) return; // Prevent fetch if symptoms is undefined or empty

            try {
                const options = {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ symptons }), // Ensure the variable name matches
                };

                const response = await fetch("http://localhost:3001", options);

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();
                console.log(data);
            } catch (error) {
                console.error('There was a problem with the fetch operation:', error);
            }
        };

        fetchData();
    }, [symptons]);

    return(
        <article className='home-container'>
            <main className="relax-container">
                <h1>Welcome to the Your Mood App</h1>
                <p>A healthy mind has wealthy soul <br /> Here we provide you the best solutions to your mental issues.</p>
                <h1>Just Breathe <br/> And Relax....</h1>
                <Link to={'/help'} className='link'><button className='help-btn'>Help</button></Link>
            </main>
            <section className="consent-container">
                    <h1 className='consent-heading'>Tell us about your symptoms</h1>
                        <select className="symptons-container" onChange={onHandleChange}>
                            <option value={""}>select</option>
                            <option value={"forgetting things"}>forgetting things</option>
                            <option value={"headache due to pressure"}>headache due to pressure</option>
                            <option value={"mood swings"}>mood swings</option>
                            
                        </select>
            </section>
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