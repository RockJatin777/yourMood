import './index.css'
import img_1 from '../Assets/'
import img_2 from '../Assets/'
import img_3 from '../Assets/'
import img_4 from '../Assets/'

function Anxiety(){
    return(
        <section>
            <div>
                <h1>Deal With Anxiety</h1>
            </div>
            <p>
                Dealing with anxiety involves several effective strategies. Practicing mindfulness and deep-breathing exercises can help calm the mind. Establishing a routine, engaging in regular physical activity, and prioritizing sleep are crucial. Additionally, seeking support from friends, family, or a mental health professional can provide valuable guidance and reassurance during challenging times.
            </p>
            <div>
                <div>
                    <img src={img_1}></img>
                    <h4>Addiction can disrupt personal relationships</h4>
                </div>

                <div>
                    <img scr={img_2}></img>
                    <h4>Addiction can disrupt career opportunities</h4>
                </div>
                        
                <div>
                    <img scr={img_3}></img>
                    <h4>Addiction can often leads legal problem</h4>
                </div>

                <div>
                    <img scr={img_4}></img>
                    <h4>Addiction can often leads legal problem</h4>
                </div>
            </div>
        </section>
    )

}

export default Anxiety