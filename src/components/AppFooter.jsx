import DcLogoBg from '/dc-logo-bg.png'

export default function AppHeader() {
    return (
        <footer>
            <div className="container">
                <div className="row">

                    <nav className="Footer-nav col-2">
                        <h4>DC COMICS</h4>
                        <a href="">Characters</a>
                        <a href="">Comics</a>
                        <a href="">Movies</a>
                        <a href="">TV</a>
                        <a href="">Games</a>
                        <a href="">Videos</a>
                        <a href="">News</a>

                        <nav className="Footer-nav col-2">
                        <h4>SHOP</h4>
                        <a href="">Shop DC</a>
                        <a href="">Shop DC Collectibles</a>
                    </nav>

                    </nav>

                    <nav className="Footer-nav col-2">
                        <h4>DC</h4>
                        <a href="">Terms Of Use</a>
                        <a href="">Privacy policy (New)</a>
                        <a href="">Ad Choices</a>
                        <a href="">Advertising</a>
                        <a href="">Jobs</a>
                        <a href="">Subscriptions</a>
                        <a href="">Talent Workshops</a>
                        <a href="">CPSC Certificates</a>
                        <a href="">Ratings</a>
                        <a href="">Shop Help</a>
                        <a href="">Contact Us</a>
                    </nav>

                    <nav className="Footer-nav col-2">
                        <h4>SITES</h4>
                        <a href="">DC</a>
                        <a href="">MAD Magazine</a>
                        <a href="">DC Kids</a>
                        <a href="">DC Universe</a>
                        <a href="">DC Power Visa</a>
                    </nav>

                    <div className="col-4 d-flex justify-content-end align-items-start">
                        <img className="img-Footer" src={DcLogoBg} alt="" />
                    </div> 
                </div>
            </div>
        </footer>
    )
}