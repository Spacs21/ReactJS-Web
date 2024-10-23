import "./Footer.css"
import '@fortawesome/fontawesome-free/css/all.min.css';

function Footer(){
    return(
        <aside>
            <div className="container">
                <div className="contact">
                    <div className="title new">
                        <h2>Stay in Touch</h2>
                        <div className="line"></div>
                    </div>
                    <form action="" className="form">
                        <input type="text" placeholder="Enter your email address"/>
                        <button>Submit</button>
                    </form>
                </div>
            </div>
            <footer>
                <div className="container">
                    <div className="footer">
                        <div className="logo"><h2>Escape</h2></div>
                        <ul className="links">
                            <li><a href="#">HOME</a></li>
                            <li><a href="#">CATEGORIES</a></li>
                            <li><a href="#">ABOUT</a></li>
                            <li><a href="#">CONTACT</a></li>
                        </ul>
                    </div>
                </div>
            </footer>
        </aside>
    )
}

export default Footer