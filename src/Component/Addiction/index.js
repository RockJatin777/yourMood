
import './index.css'
import alcohol from '../Assets/Alcohol.jpg'
function Addiction(){
    return(
        <>
            <Navbar></Navbar>
            <main>
                <div class="addiction-container">
                    <h2 class="font-lg">
                        Addiction -
                    </h2>
                    <p>
                    Addiction affects mental health as increased anxiety and depression substance use can exacerbate feelings of anxiety and depression, creating a cycle that makes recovery challenging. Addiction can impair judgement, memory, and decision-making, affecting daily functioning and relationaships.
                    </p>
                    <p>Addiction is a widely viewed as a brain disease due to how it impact the brain's reward, pleasure, and self-control circuits.</p>
                </div>
            </main>
            <section>
                <h3>Understanding Addiction</h3>
                <div>
                    <div>
                        <div>
                            <img src={alcohol}></img>
                            <h4>Addiction can disrupt personal relationships</h4>
                        </div>

                        <div>
                            <img scr=""></img>
                            <h4>Addiction can disrupt career opportunities</h4>
                        </div>
                        
                        <div>
                            <img scr=""></img>
                            <h4>Addiction can often leads legal problem</h4>
                        </div>
                        
                    </div>
                        
                    <div> 
                        <div>
                            <img scr=""></img>
                            <h4>Addiction can often leads legal problem</h4>
                        </div>
                        
                        <div>
                            <img scr=""></img>
                            <h4>Addiction can often leads legal problem</h4>
                        </div>
                        
                        <div>
                            <img scr=""></img>
                            <h4>Addiction can often leads legal problem</h4>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
        
}

export default Addiction