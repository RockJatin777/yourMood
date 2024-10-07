import img_1 from '../Assets/Anxeity-1.jpg';
import img_2 from '../Assets/Anxiety-2.jpg';
import img_3 from '../Assets/Anxiety-3.jpg';
import img_4 from '../Assets/Anxeity-4.jpg';

import './index.css';

function Anxiety(){
    return(
        <section className='anxiety-section'> 
            <h1>Deal With Anxiety</h1>
            <p>Dealing with anxiety involves several effective strategies. Practicing mindfulness and deep-breathing exercises can help calm the mind. Establishing a routine, engaging in regular physical activity, and prioritizing sleep are crucial. Additionally, seeking support from friends, family, or a mental health professional can provide valuable guidance and reassurance during challenging times.</p>
            <div class="card-container">
                <div class="card">
                    <img src={img_1} alt="Sample 1" className="card-img" />
                    <div class="card-content">
                        <h3 class="card-title">Addiction can disrupt personal relationships</h3>
                        <p class="card-description">Addiction affects various aspects of life, including personal relationships, mental and physical health, and financial stability.</p>
                        <button class="card-btn">Learn More</button>
                    </div>
                </div>

                <div class="card">
                    <img src={img_2} alt="Sample 2" className="card-img" />
                    <div class="card-content">
                        <h3 class="card-title">Biological and Psychological Factors</h3>
                        <p class="card-description">Addiction is often driven by complex interactions between the brain's reward system and environmental or psychological triggers.</p>
                        <button class="card-btn">Learn More</button>
                    </div>
                </div>

                <div class="card">
                    <img src={img_3} alt="Sample 3" className="card-img" />
                    <div class="card-content">
                        <h3 class="card-title">Progressive and Chronic Nature</h3>
                        <p class="card-description">Addiction tends to develop gradually, starting with casual use or exposure and potentially evolving into a more intense, compulsive behavior.</p>
                        <button class="card-btn">Learn More</button>
                    </div>
                </div>
                <div class="card">
                    <img src={img_4} alt="Sample 3" className="card-img" />
                    <div class="card-content">
                        <h3 class="card-title">Progressive and Chronic Nature</h3>
                        <p class="card-description">Addiction tends to develop gradually, starting with casual use or exposure and potentially evolving into a more intense, compulsive behavior.</p>
                        <button class="card-btn">Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Anxiety