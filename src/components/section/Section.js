import "./Section.css"

function Section(){
    return (
        <section className="advertisment">
            <div className="container">
                <div className="section-holder">
                    <ul className="list">
                        <li><a href="#">Nature</a></li>
                        <li><a href="#">Photography</a></li>
                        <li><a href="#">Relaxation</a></li>
                        <li><a href="#">Vacation</a></li>
                        <li><a href="#">Travel</a></li>
                        <li><a href="#">Adventure</a></li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Section