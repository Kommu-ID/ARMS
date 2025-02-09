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
                <div>
                    <img src="/Sound Icon.png" alt="sound" />
                </div>
                <div className="sound-waves">
                    <div>Sound in Earth</div>
                    <div className="playing">
                        {[...Array(15)].map((_, idx) => (
                            <div
                                key={idx}
                                className={`greenline line-${(idx % 5) + 1}`}
                            ></div>
                        ))}
                    </div>
                </div>
                <div>
                    <img src="/Play Icon.png" alt="sound" />
                </div>
            </div>
        </>
    );
}

export default PlanetLast;