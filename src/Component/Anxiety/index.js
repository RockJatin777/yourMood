import img_1 from '../Assets/Anxeity-1.jpg';
import img_2 from '../Assets/Anxiety-2.jpg';
import img_3 from '../Assets/Anxiety-3.jpg';
import img_4 from '../Assets/Anxeity-4.jpg';

import './index.css';

function Anxiety(){
    return(
        <section className='anxiety-section'> 
            <div className='deal-container'>
                <h1>Deal With Anxiety</h1>
                <p>Dealing with anxiety involves several effective strategies. Practicing mindfulness and deep-breathing exercises can help calm the mind. Establishing a routine, engaging in regular physical activity, and prioritizing sleep are crucial. Additionally, seeking support from friends, family, or a mental health professional can provide valuable guidance and reassurance during challenging times.</p>
            </div>
            <div className="card-container">
            
                <div className="card">
                    <img src={img_1} alt="Sample 1" className="card-img" />
                    <div className="card-content">
                        <h3 className="card-title">Addiction can disrupt personal relationships</h3>
                        <p className="card-description">Addiction affects various aspects of life, including personal relationships, mental and physical health, and financial stability.</p>
                        <button className="card-btn">Learn More</button>
                    </div>
                </div>

                <div className="card">
                    <img src={img_2} alt="Sample 2" className="card-img" />
                    <div className="card-content">
                        <h3 className="card-title">Biological and Psychological Factors</h3>
                        <p className="card-description">Addiction is often driven by complex interactions between the brain's reward system and environmental or psychological triggers.</p>
                        <button className="card-btn">Learn More</button>
                    </div>
                </div>

                <div className="card">
                    <img src={img_3} alt="Sample 3" className="card-img" />
                    <div className="card-content">
                        <h3 className="card-title">Progressive and Chronic Nature</h3>
                        <p className="card-description">Addiction tends to develop gradually, starting with casual use or exposure and potentially evolving into a more intense, compulsive behavior.</p>
                        <button className="card-btn">Learn More</button>
                    </div>
                </div>
                <div className="card">
                    <img src={img_4} alt="Sample 3" className="card-img" />
                    <div className="card-content">
                        <h3 className="card-title">Progressive and Chronic Nature</h3>
                        <p className="card-description">Addiction tends to develop gradually, starting with casual use or exposure and potentially evolving into a more intense, compulsive behavior.</p>
                        <button className="card-btn">Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Anxiety