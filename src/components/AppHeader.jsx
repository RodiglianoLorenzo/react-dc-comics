import imglogo from '/dc-logo.png'

export default function AppHeader(){

    const links = [
        { id: 1, text: "CHARACTERS", url: "#" },
        { id: 2, text: "COMICS", url: "#" },
        { id: 3, text: "MOVIES", url: "#" },
        { id: 4, text: "TV", url: "#" },
        { id: 5, text: "GAMES", url: "#" },
        { id: 6, text: "COLLECTIBLES", url: "#" },
        { id: 7, text: "VIDEOS", url: "#" },
        { id: 8, text: "FANS", url: "#" },
        { id: 9, text: "NEWS", url: "#" },
        { id: 10, text: "SHOP", url: "#" }
    ];

    return(
        <header>
            <img src={imglogo} alt="logo" />
            <nav>
               <ul>
                {links.map((link)=>
                    <li key={link.id}>
                      <a className={link.id === 2 ? 'active' : ''} href={link.url}>{link.text}</a>  
                    </li>
                )}
               </ul>
            </nav>

        </header>
    )


}