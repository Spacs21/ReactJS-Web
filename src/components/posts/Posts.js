import "./Posts.css"
import profileImage from '../../assets/profile1.png';
import profileImage2 from '../../assets/profile2.png';
import post1 from '../../assets/post1.png';
import post2 from '../../assets/post2.png';

function Posts(){
    return (
        <main>
            <div className="container">
                <div className="title">
                    <h2>Feature Posts</h2>
                    <div className="line"></div>
                </div>
                <div className="posts">
                    <div className="post">
                        <h2>The Road Ahead</h2>
                        <p>The road ahead might be paved - it might not be.</p>
                        <div className="profile">
                            <div className="avatar">
                                <img src={profileImage}/>
                                <p>Mat Vogels</p>
                            </div>
                            <div className="date">
                                <p>September 25, 2015</p>
                            </div>
                        </div>
                        <div className="event">
                            <button>Read More</button>
                        </div>
                    </div>
                    <div className="post new">
                        <h2>From Top Down</h2>
                        <p>Once a year, go someplace you’ve never been before.</p>
                        <div className="profile">
                            <div className="avatar">
                                <img src={profileImage2}/>
                                <p>William Wong</p>
                            </div>
                            <div className="date">
                                <p>September 25, 2015</p>
                            </div>
                            <div className="event">
                                <button>Read More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Posts