import DcLogoBg from '/dc-logo-bg.png'


export default function AppHeader() {

    const menuItems = [
        { id: 1, menu: "Characters", url: "#" },
        { id: 2, menu: "Comics", url: "#" },
        { id: 3, menu: "Movies", url: "#" },
        { id: 4, menu: "TV", url: "#" },
        { id: 5, menu: "Games", url: "#" },
        { id: 6, menu: "Videos", url: "#" },
        { id: 7, menu: "News", url: "#" }
    ];

    const shopLinks = [
        { id: 1, menu: "Shop DC", url: "#" },
        { id: 2, menu: "Shop DC Collectibles", url: "#" }
    ];

    const footerLinks = [
        { id: 1, menu: "Terms Of Use", url: "#" },
        { id: 2, menu: "Privacy policy (New)", url: "#" },
        { id: 3, menu: "Ad Choices", url: "#" },
        { id: 4, menu: "Advertising", url: "#" },
        { id: 5, menu: "Jobs", url: "#" },
        { id: 6, menu: "Subscriptions", url: "#" },
        { id: 7, menu: "Talent Workshops", url: "#" },
        { id: 8, menu: "CPSC Certificates", url: "#" },
        { id: 9, menu: "Ratings", url: "#" },
        { id: 10, menu: "Shop Help", url: "#" },
        { id: 11, menu: "Contact Us", url: "#" }
    ];

    const dcLinks = [
        { id: 1, menu: "DC", url: "#" },
        { id: 2, menu: "MAD Magazine", url: "#" },
        { id: 3, menu: "DC Kids", url: "#" },
        { id: 4, menu: "DC Universe", url: "#" },
        { id: 5, menu: "DC Power Visa", url: "#" }
    ];

    return (
        <footer>
            <div className='UpFooter'>
                <div className="container">
                    <div className="row">

                        <nav className="Footer-nav col-2">
                            <h4>DC COMICS</h4>
                            <ul className='list'>
                                {menuItems.map((item) => (
                                    <li key={item.id}>
                                        <a href={item.url}>{item.menu}</a>
                                    </li>
                                ))}
                            </ul>

                            <nav className="Footer-nav col-2">
                                <h4>SHOP</h4>
                                <ul>
                                    {shopLinks.map((shop) =>
                                        <li key={shop.id}>
                                            <a key={shop.id} href={shop.url}>{shop.menu}</a>
                                        </li>
                                    )}
                                </ul>
                            </nav>

                        </nav>

                        <nav className="Footer-nav col-2">
                            <h4>DC</h4>
                            <ul>
                                {footerLinks.map((link) =>
                                    <li key={link.id}>
                                        <a key={link.id} href={link.url}>{link.menu}</a>
                                    </li>
                                )}
                            </ul>
                        </nav>

                        <nav className="Footer-nav col-2">
                            <h4>SITES</h4>
                            <ul>
                                {dcLinks.map((dc) =>
                                    <li key={dc.id}>
                                        <a key={dc.id} href={dc.url}>{dc.menu}</a>
                                    </li>
                                )}
                            </ul>
                        </nav>

                        <div className="col-4 d-flex justify-content-end align-items-start">
                            <img className="img-Footer" src={DcLogoBg} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='BtFooter'>
                <div className='container'>
                    <div className='BtFooter-row'>
                        <button className='SignUp'>SIGN-UP NOW!</button>
                        <div className='social'>
                            <p>FOLLOW US</p>
                            <img className='web' src="/footer-facebook.png" alt="" />
                            <img className='web' src="/footer-twitter.png" alt="" />
                            <img className='web' src="/footer-youtube.png" alt="" />
                            <img className='web' src="/footer-pinterest.png" alt="" />
                            <img className='web' src="/footer-periscope.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </footer >
    )
}

