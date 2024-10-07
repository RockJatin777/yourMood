import yoga_image from '../Assets/banner-img.webp';
import './index.css'

function Meditation(){
    return(
        <>
        <div className="medit-container head-container">
        <div className="content-area-1">
            <h1 className="title">Mindfulness and Meditation</h1>
            <p className="medit-paragraph">
                Meditation is a practice that involves focusing the mind to achieve mental clarity and emotional calm. Regular meditation reduces stress, enhances concentration, and promotes overall well-being. By encouraging mindfulness, it helps individuals gain a deeper understanding of their thoughts and feelings, fostering inner peace and mental resilience.
            </p>
        </div>
    </div>
    <div className="meditation-container">
        <h1 className="section-title">Benefits of Meditation</h1>
        <div className="benefits-container">
            <div className="benefit-card card-1">
                <h2 className="benefit-title">Reduces Stress</h2>
                <p className="benefit-description">Meditation helps lower levels of stress hormones, reducing anxiety and
                    promoting a sense of calm.</p>
            </div>

            <div className="benefit-card card-2">
                <h2 className="benefit-title">Improves Focus</h2>
                <p className="benefit-description">Regular meditation practice enhances attention span and concentration,
                    boosting productivity.</p>
            </div>

            <div className="benefit-card card-3">
                <h2 className="benefit-title">Promotes Emotional Health</h2>
                <p className="benefit-description">Meditation fosters a greater sense of well-being and emotional stability, reducing symptoms of depression.</p>
            </div>

            <div className="benefit-card card-4">
                <h2 className="benefit-title">Enhances Self-Awareness</h2>
                <p className="benefit-description">Meditation encourages self-reflection, helping individuals gain a deeper understanding of themselves.</p>
            </div>
        </div>
    </div>

    <div className="medit-container-1">
        <div className="content">
            <div className="image-side">
                <img src={yoga_image} alt="Sample" />
            </div>
            <div className="text-side">
                <h1 className="section-title">What Happens to Your Brain When You Meditate Every Day?</h1>
                <p className="description">
                    People who meditate regularly swear by it, but others are often skeptical of it, thinking it’s a little, you know, woo-woo. As a result, we're better equipped to handle stress, stay focused on tasks, and experience a greater sense of well-being in our daily lives.
                </p>
                <p className="description">
                    Meditation can actually create structural changes in the brain. It has been shown to increase gray matter in the brain, particularly in areas related to learning, memory, emotion regulation, and perspective.
                </p>
            </div>
        </div>
    </div>
    </>
    )
}

export default Meditation