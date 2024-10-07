import alcohal_logo from '../Assets/Alcohol.jpg'

import './index.css'

function Addiction(){
    return(
        <>
            <main className='addiction-container'>
                <div class="addiction-content-container">
                    <h1 class="font-lg">Addiction </h1>
                    <p>Addiction affects mental health as increased anxiety and depression substance use can exacerbate feelings of anxiety and depression, creating a cycle that makes recovery challenging. Addiction can impair judgement, memory, and decision-making, affecting daily functioning and relationaships.</p>
                    <h2>How can you break an addiction?</h2>
                    <p>The first step in overcoming addiction is to desire change and avoid the people, places and things which promote the addiction. Support groups, mentors, and 12 step programs provide help, while counselors, recovery centers, and physicians provide expertise and medication to treat cravings and the effects of withdrawal. Eating healthy and getting exercise also play an important role in recovery.</p>
                </div>
                <div>
                    <img className='alc-image' src={alcohal_logo} alt='' />
                </div>
            </main>
        </>
    )
        
}

export default Addiction