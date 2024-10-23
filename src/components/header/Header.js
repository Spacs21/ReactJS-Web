import "./Header.css"

function Header(){
    return (
        <header className="header">
            <div className="container">
                <div className="content">
                    <div className="navbar">
                        <div className="logo"><h1>Escape.</h1></div>
                        <ul className="collection">
                            <li className="list"><a href="#">HOME</a></li>    
                            <li className="list"><a href="#">CATEGORIES</a></li>    
                            <li className="list"><a href="#">ABOUT</a></li>    
                            <li className="list"><a href="#">CONTACT</a></li>    
                        </ul>
                        <div className="burger">
                            <i class="fa-solid fa-bars"></i>
                        </div>
                    </div>
                    <div className="content-text">
                        <h1>Let's do it together.</h1>
                        <p>We travel the world in search of stories. Come along for the ride.</p>
                        <button>View Latest Posts</button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header