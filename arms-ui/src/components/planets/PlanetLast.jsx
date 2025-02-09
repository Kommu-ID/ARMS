function PlanetLast() {
    return (
        <>
            <div className="status-container">
                <div className="row">
                    <div className="card glass">
                        <div>Oxygen Level</div>
                        <div>92%</div>
                    </div>
                    <div className="card glass">
                        <div>Water Level</div>
                        <div>86%</div>
                    </div>
                </div>
                <div className="card center glass">Food Level 78%</div>
                <div className="card center glass">
                    <div>Remaining Time for Mission</div>
                    <div>230 d : 14 h : 30 m : 7 s</div>
                </div>
            </div>

            <hr />
            <div id="sound-sec">
                <div className="head">Check our other demo here:</div>
                <div>
                    <a className="link" target="_blank" href="https://huggingface.co/spaces/rehanafzal/ARMS">
                        Demo 1
                    </a>
                    &nbsp; &nbsp; |&nbsp; &nbsp;
                    <a className="link" target="_blank" href="https://huggingface.co/spaces/Afeefa123/ARMS-Project">
                        Demo 2
                    </a>
                </div>
            </div>
        </>
    );
}

export default PlanetLast;
