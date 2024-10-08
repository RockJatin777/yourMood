import therepy_img from '../Assets/therepy.webp'

import './index.css'

function Therepy(){
    return(
        <main className='therepy-container'>
            <img className='therepy-image' src={therepy_img} alt='' />
            <h1>Therapy</h1>
            <section className='details-section'>
                <h1>What Is Therapy?</h1>
                <p >
                    Therapy, also known as psychotherapy or talk therapy, refers to the techniques that help people change behaviors, thoughts, and emotions that cause problems or distress. It is an umbrella term that describes treating mental disorders and mental distress through verbal and psychological techniques.
                    Problems alleviated by therapy can include difficulties in dealing with loss, stress at home or work, working through trauma, and coping with symptoms of specific mental conditions.
                </p>
            </section>
            <section className='details-section'>
                <h1>Does Therapy Work?</h1>
                <p>
                    Research shows that therapy can help reduce depression, anxiety, eating disorder symptoms and help those struggling with addiction. In fact, studies show about 75 percent of people who enter psychotherapy show some benefit from it.1 Many studies have also shown combined treatment for depression (psychotherapy with medication) to have many benefits over single-modality treatment.2
                    Having a space to process and talk through your experience and the happenings of your life can be transformative. While many people often rely on their friends, family or significant others for support, there are disadvantages in doing so exclusively.\
                </p>
            </section>
            <section className='details-section'>
                <h1>Do I Need Therapy?</h1>
                <p>
                    You don’t need to be dealing with a clinically diagnosed mental health condition to try therapy—anyone can benefit from seeking support to manage their mental health. If stressors are interfering with your day-to-day, whether at home, work, and/or in your interpersonal relationships, it may be time to see a therapist.
                </p>
            </section>
            <section className='details-section'>
                <h1>How Much Does Therapy Cost?</h1>    
                <p>
                    Therapy may cost, on average, anywhere between Rs-500 to Rs-2000 per hour, though costs vary depending on a number of factors. Online providers tend to be on the lower end of that range at Rs-2000 to Rs-10000 per week, while in-person therapy sessions will usually cost between Rs-600 and Rs-1000. Suffice to say, cost can be a massive barrier to treatment.
                    A Verywell Mind survey showed that while 8 in 10 Americans in therapy say it's a good investment, about half of people in therapy are concerned about their ability to pay for it long-term. While online therapy provides a more affordable option, it is still hundreds of dollars per month that many people can't afford if treatment is not covered by insurance.
                </p>
            </section>
            <section className='details-section'>
                <h1>We Tested the Top Online Therapy Companies in 2024</h1>
                <ul>
                    <li>Best for Availability: BetterHelp</li>
                    <li>Most Comprehensive: Talkspace</li>
                    <li>Best for Anxiety and Depression: Brightside</li>
                    <li>Best for Beginners: Teladoc</li>
                    <li>Best for Kids: Little Otter</li>
                    <li>Most Inclusive: TherapyDen</li>
                    <li>Best for Medication Management: Doctor on Demand</li>
                    <li>Most Affordable: E-Therapy Cafe</li>
                </ul>
            </section>
            
        </main>
    )
}

export default Therepy