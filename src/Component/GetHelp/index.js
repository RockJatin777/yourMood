import './index.css'

function GetHelp(){
    return(
        <div className="content-area">
        <h1>Get help now</h1>
        <div className="container">
            <div className="row">
                <div className="col-md-6 column ">
                    <div className="content-area bg-peach bg-col">
                        <p style={{textAlign: 'left'}}>If you feel like you might seriously harm yourself or attempt suicide, you need urgent medical help.</p>
                        <button className="btn btn-blue-standard">Get emergency advice</button>
                    </div>
                </div>
                <div className="col-md-6 column ">
                    <div className="content-area bg-green bg-col">
                        <p style={{textAlign: 'left'}}>If you are in crisis but it's not a medical emergency, you might find our crisis resources helpful.</p>
                        <button className="btn btn-blue-standard">Go to our crisis resources</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row clearfix">
                <div className="col-md-6 column ">
                    <div className="content-area bg-pale bg-col">
                        <p>Call or email our confidential Infoline or Legal line to ask us about mental health and related legal issues.</p>
                        <button className="btn btn-blue-standard">Contact our helplines</button>
                    </div>
                </div>
                <div className="col-md-6 column ">
                    <div className="content-area bg-pale bg-pale-pink bg-col">
                        <p>If you want to learn more about a specific topic, you might find it covered in our A-Z of mental health.</p>
                        <button className="btn btn-blue-standard">Go to mental health A-Z</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default GetHelp