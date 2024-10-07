import exercise_image from '../Assets/Excercise.jpg';
import meditation_image from '../Assets/Meditation.jpg';
import work_image from '../Assets/Work.png';
import time_management from '../Assets/Time-Managment.jpg';
import social_image from '../Assets/Social-Network.jpg';
import healthy_image from '../Assets/Healthy Eating.png'
import relaxation_image from '../Assets/Relaxing Excercise.jpg';
import goal_image from '../Assets/Goals.jpg';


import './index.css'

function ManagingSress(){
    return(
        <>
            <div className="container">
                <div className="content-area">
                    <h1 className="title">Stress Management</h1>
                    <p className="paragraph">
                        Stress management involves techniques to control an individual’s stress levels, particularly in professional and personal contexts. Effective methods include time management, physical activity, mindfulness, and relaxation techniques like deep breathing. Prioritizing work-life balance, setting realistic goals, and seeking support can improve well-being and enhance productivity under pressure.
                    </p>
                </div>
            </div>
            <div className="card-container">
                <div className="card">
                    <img src={meditation_image} alt="img1" class="card-img" />
                    <div className="card-content">
                        <h3 className="card-title">Practice Mindfulness and Meditation</h3>
                        <p className="card-description">Engage in mindfulness and meditation techniques to increase focus, reduce anxiety, and foster mental clarity.</p>
                        <button className="card-btn">Learn More</button>
                    </div>
                </div>
                <div class="card">
                    <img src={work_image} alt="img2" class="card-img" />
                    <div className="card-content">
                        <h3 className="card-title">Maintain a Healthy Work-Life Balance</h3>
                        <p className="card-description">Prioritize time for rest and leisure to maintain productivity while preventing burnout and long-term stress accumulation.</p>
                        <button className="card-btn">Learn More</button>
                    </div>
                </div>

                <div class="card">
                    <img src={exercise_image} alt="img3" class="card-img" />
                    <div className="card-content">
                        <h3 className="card-title">Physical Activity and Exercise</h3>
                        <p className="card-description">Regular exercise helps release endorphins, promoting better mood and reducing stress levels through improved physical health.</p>
                        <button className="card-btn">Learn More</button>
                    </div>
                </div>
                <div class="card">
                    <img src={time_management} alt="img4" class="card-img" />
                    <div className="card-content">
                        <h3 className="card-title">Develop Time Management Skills</h3>
                        <p className="card-description">Organize tasks with clear priorities, reducing overwhelm and fostering a structured approach to managing responsibilities effectively.</p>
                        <button className="card-btn">Learn More</button>
                    </div>
                </div>
            </div>
            <div class="card-container">
                <div class="card">
                    <img src={healthy_image} alt="img5" class="card-img" />
                    <div className="card-content">
                        <h3 className="card-title">Healthy Eating Habits</h3>
                        <p className="card-description">Balanced nutrition can positively impact mood and energy levels, promoting resilience against stress and improved overall well-being.</p>
                        <button className="card-btn">Learn More</button>
                    </div>
                </div>
                <div className="card">
                    <img src={social_image} alt="img6" class="card-img" />
                    <div className="card-content">
                        <h3 className="card-title">Build a Support Network</h3>
                        <p className="card-description">Maintaining strong social connections provides emotional support, helping to alleviate stress through shared experiences and understanding.</p>
                        <button className="card-btn">Learn More</button>
                    </div>
                </div>

                <div class="card">
                    <img src={relaxation_image} alt="img7" class="card-img" />
                    <div className="card-content">
                        <h3 className="card-title">Engage in Hobbies or Relaxing Activities</h3>
                        <p className="card-description">Participating in activities that bring joy and relaxation helps divert focus away from stressors and fosters mental rejuvenation.</p>
                        <button className="card-btn">Learn More</button>
                    </div>
                </div>
                <div className="card">
                    <img src={goal_image} alt="img8" class="card-img" />
                    <div className="card-content">
                        <h3 className="card-title">Set Realistic Goals</h3>
                        <p className="card-description">Break down large tasks into achievable steps, reducing the feeling of overwhelm and providing a clear path toward completion.</p>
                        <button className="card-btn">Learn More</button>
                    </div>
            </div>
        </div>
    </>
    )
}

export default ManagingSress