import DigitalComics from '../assets/img/buy-comics-digital-comics.png'
import DcMerchandise from '/buy-comics-merchandise.png'
import SubScription from '/buy-comics-subscriptions.png'
import ComicShopLocator from '/buy-comics-shop-locator.png'
import DcPowerVisa from '/buy-dc-power-visa.svg'
export default function AppMain() {
    return (
        <main>
            <div className='bg-black'>
                <div className="container">
                    <div className='row '>
                        <div className='col text-white'><h1>Content goes Here</h1></div>
                    </div>
                </div>
            </div>
            <div className='bg-primary'>
                <div className="container">
                    <div className='row' >
                        <div className='col'>
                            <img className='immagine' src={DigitalComics} alt="digital Comics" /> <span>Digital Comics</span>
                        </div>
                        <div className='col'>
                            <img className='immagine' src={DcMerchandise} alt="digital Comics" /> <span>Digital Comics</span>
                        </div>
                        <div className='col'>
                            <img className='immagine' src={SubScription} alt="digital Comics" /> <span>Digital Comics</span>
                        </div>
                        <div className='col'>
                            <img className='immagine' src={ComicShopLocator} alt="digital Comics" /> <span>Digital Comics</span>
                        </div>
                        <div className='col'>
                            <img className='immagine' src={DcPowerVisa} alt="digital Comics" /> <span>Digital Comics</span>
                        </div>
                    </div>
                </div>
            </div>

        </main>
    )
}