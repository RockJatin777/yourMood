import Navbar from "../Navbar";

function Home(){
    return(
        <>
            <Navbar></Navbar>
            <main>
                <h1>Welcome to the Your Mood App</h1>
                <h1>Just Breathe <br/> And Relax</h1>
                <p>A healthy mind has wealthy soul</p>
            </main>
            <section>
                <h1>How Are You Feeling Today</h1>
                <div>
                    <button>Anxiety</button>
                    <button>Stress</button>
                    <button>Depression</button>
                    <button>Mood Swing</button>
                </div>
            </section>
        </>
    )
        
}

export default Home