function FeedLast() {
    return (
        <>
            <img className="top-earth-shadow" src="/Shadow Planet.png" alt="" />
            <div className="posts-block rounded-3xl">
                <div className="bio-data">
                    <img className="profile-pic" src="/Profile.png" alt="" />
                    <div className="profile-name">ARMS</div>
                    <div className="intro">
                        ARMS (Autonomous Resource Management System) is an
                        AI-driven solution that autonomously monitors critical
                        resources and optimizes survival strategies in high-risk
                        environments.
                    </div>
                    <br />
                </div>
                <hr />
                <br />
                <div className="feed-posts-block rounded-3xl">
                    <div className="inline-posts">
                        <img className="feed-posts" src="/image 1.png" alt="" />
                        <img className="feed-posts" src="/image 2.png" alt="" />
                        <img className="feed-posts" src="/image 3.png" alt="" />
                    </div>
                    <div className="inline-posts">
                        <img className="feed-posts" src="/image 4.png" alt="" />
                        <img className="feed-posts" src="/image 5.png" alt="" />
                        <img className="feed-posts" src="/image 6.png" alt="" />
                    </div>
                    <div className="inline-posts">
                        <img className="feed-posts" src="/image 7.png" alt="" />
                        <img className="feed-posts" src="/image 8.png" alt="" />
                        <img className="feed-posts" src="/image 9.png" alt="" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default FeedLast;
