import "./Recent.css"
import card1 from "../../assets/land1.png"
import card2 from "../../assets/land2.png"
import card3 from "../../assets/land3.png"
import card4 from "../../assets/land4.png"
import card5 from "../../assets/land5.png"
import card6 from "../../assets/land6.png"
import profileImage from '../../assets/profile1.png';
import profileImage2 from '../../assets/profile2.png';

function Recent(){
    return(
        <article>
            <div className="container">
            <div className="title">
                    <h2>Most Recent</h2>
                    <div className="line"></div>
                </div>
                <div className="cards">
                    <div className="card">
                        <img src={card6} />
                        <div className="card-text">
                            <h3>Still Standing Tall</h3>
                            <p>Life begins at the end of your comfort zone.</p>
                        </div>
                        <div className="card-line"></div>
                        <div className="user">
                            <div className="name">
                                <img src={profileImage2}/>
                                <p>William Wong</p>
                            </div>
                            <div className="date">
                                <p>9/25/2015</p>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <img src={card4} />
                        <div className="card-text">
                            <h3>Sunny Side Up</h3>
                            <p>No place is ever as bad as they tell you it’s going to be.</p>
                        </div>
                        <div className="card-line"></div>
                        <div className="user">
                            <div className="name">
                                <img src={profileImage}/>
                                <p>Mat Vogels</p>
                            </div>
                            <div className="date">
                                <p>9/25/2015</p>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <img src={card1} />
                        <div className="card-text">
                            <h3>Water Falls</h3>
                            <p>We travel not to escape life, but for life not to escape us.</p>
                        </div>
                        <div className="card-line"></div>
                        <div className="user">
                            <div className="name">
                                <img src={profileImage}/>
                                <p>Mat Vogels</p>
                            </div>
                            <div className="date">
                                <p>9/25/2015</p>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <img src={card2} />
                        <div className="card-text">
                            <h3>Through the Mist</h3>
                            <p>Travel makes you see what a tiny place you occupy in the world.</p>
                        </div>
                        <div className="card-line"></div>
                        <div className="user">
                            <div className="name">
                                <img src={profileImage2}/>
                                <p>William Wong</p>
                            </div>
                            <div className="date">
                                <p>9/25/2015</p>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <img src={card3} />
                        <div className="card-text">
                            <h3>Awaken Early</h3>
                            <p>Not all those who wander are lost.</p>
                        </div>
                        <div className="card-line"></div>
                        <div className="user">
                            <div className="name">
                                <img src={profileImage}/>
                                <p>Mat Vogels</p>
                            </div>
                            <div className="date">
                                <p>9/25/2015</p>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <img src={card5} />
                        <div className="card-text">
                            <h3>Try it Always</h3>
                            <p>The world is a book, and those who do not travel read only one page.</p>
                        </div>
                        <div className="card-line"></div>
                        <div className="user">
                            <div className="name">
                                <img src={profileImage}/>
                                <p>Mat Vogels</p>
                            </div>
                            <div className="date">
                                <p>9/25/2015</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default Recent