import alcohal_logo from '../Assets/Alcohol.jpg';
import card_1_img from '../Assets/card-img-1.png';
import card_2_img from '../Assets/card-img-2.png';
import card_3_img from '../Assets/card-img-3.png';
import Footer from '../Footer'


import './index.css'

function Addiction(){
    return(
        <>
            <main className='addiction-container'>
                <div className="addiction-content-container">
                    <h1 className="font-lg">Addiction </h1>
                    <p>Addiction affects mental health as increased anxiety and depression substance use can exacerbate feelings of anxiety and depression, creating a cycle that makes recovery challenging. Addiction can impair judgement, memory, and decision-making, affecting daily functioning and relationaships.</p>
                    <h2>How can you break an addiction?</h2>
                    <p>The first step in overcoming addiction is to desire change and avoid the people, places and things which promote the addiction. Support groups, mentors, and 12 step programs provide help, while counselors, recovery centers, and physicians provide expertise and medication to treat cravings and the effects of withdrawal. Eating healthy and getting exercise also play an important role in recovery.</p>
                </div>
                <div>
                    
                </div>
            </main>
            <h1 className='exp-heading'>Explore Addiction</h1>
            <div className="card-container">
                <div className="card">
                    <img src={card_1_img} alt="Sample 1" className="card-img" />
                    <div className="card-content">
                        <h3 className="card-title">Impact on Life and Relationships</h3>
                        <p className="card-description">Addiction affects various aspects of life, including personal relationships, mental and physical health, and financial stability.</p>
                        <button className="card-btn">Learn More</button>
                    </div>
                </div>

                <div className="card">
                    <img src={card_2_img} alt="Sample 2" className="card-img" />
                    <div className="card-content">
                        <h3 className="card-title">Biological and Psychological Factors</h3>
                        <p className="card-description">Addiction is often driven by complex interactions between the brain's reward system and environmental or psychological triggers.</p>
                        <button className="card-btn">Learn More</button>
                    </div>
                </div>

                <div className="card">
                    <img src={card_3_img} alt="Sample 3" className="card-img" />
                    <div className="card-content">
                        <h3 className="card-title">Progressive and Chronic Nature</h3>
                        <p className="card-description">Addiction tends to develop gradually, starting with casual use or exposure and potentially evolving into a more intense, compulsive behavior.</p>
                        <button className="card-btn">Learn More</button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
        
}

export default Addiction