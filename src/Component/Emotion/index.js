import './index.css'

function Emotion(){
    return(
        <article className='emotion-container'>
            <section className='emotion-def-container'>
                <h1>Understanding Emotions</h1>
                <p>
                    While we are all wired differently, our emotions—and the ways in which we feel and respond to the world around us—make us unique. They allow us to realize what's most important to us, from the people we care about to the opinions we hold, and force us to navigate the complexities of everyday life. They may also give us a glimpse into patterns stemming from our childhood experiences.
                    Learn where emotions originate, how they affect our lives and behaviors, and why they manifest in the ways that they do.
                </p>
            </section>
            <section className='question-section'>
                <h1 className='question-title'>Frequently Asked Questions</h1>
                <section className='qna-card'>
                    <h2>How many emotions are there?</h2>
                    <p>While it was previously identified that there are six basic emotions—happiness, sadness, fear, disgust, anger, and surprise—that are universally experienced in all human cultures, researchers have now found that there are 27 different categories of emotions.</p>
                </section>
                <section className='qna-card'>
                    <h2>What causes emotions?</h2>
                    <p>Emotions are influenced by a network of interconnected structures in the brain that make up what is known as the limbic system. Key structures including the hypothalamus, the hippocampus, the amygdala, and the limbic cortex play a pivotal role in emotions and behavioral responses.</p>
                </section>
                <section className='qna-card'>
                    <h2>Can we control our emotions?</h2>
                    <p>As human beings, we have the ability to self-regulate, or manage our thoughts, behaviors, and emotions—allowing us to better handle stress, deal with conflict, and accomplish our goals. We can continue to develop our self-regulation skills through mindfulness strategies and exercises.</p>
                </section>
            </section>
        </article>
    )
}

export default Emotion