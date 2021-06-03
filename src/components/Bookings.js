import '../styles/Bookings.css'
import { Banner } from './Banner'
import BannerImage from '../banners/beth-hope-h_qQdUOxQ9Y-unsplash.jpg'
import Rockpool from '../images/patwhelen-unsplash-rockpool.jpg'
import WalkingTrack from '../images/patwhelen-unsplash-track.jpg'

export function Bookings ( props ) {
    return(
        <div className="Bookings">
            
            <Banner image={BannerImage} label="Bookings" altText="Bookings" />
            
            <br></br>
            <h1>Bookings</h1>
            To make a booking, please text or call <strong>0435 123 456 </strong> or use the form on our <b><a href="/contact">Contact</a></b> page.
            <p><b>Prices</b> and <b>terms and conditions</b> are shown on our <b><a href="/pricing">Pricing</a></b> page.</p>
            We look forward to hosting your stay!
            <div className="grid">
            <div className="card">
            <img src = {Rockpool} text = "Rockpool" altText="Rockpool" width="490" height="300"/></div>
            <div className="card"><img src = {WalkingTrack} text = "Walking track" altText="Walking track" width="490" height="300"/>
            </div>
            </div>
        </div>
        )
    }

    export default Bookings