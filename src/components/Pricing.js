import { Banner } from './Banner'
import BannerImage from '../banners/nao-takabayashi-uM9EEuc69g0-unsplash (1).jpg'
import '../styles/Pricing.css'
import { Link } from 'react-router-dom'


export function Pricing(props) {
    return (
        <div className="Pricing">
            <Banner image={BannerImage} altText="Pricing" label="Pricing" />
            <br></br>
            <h1>Pricing</h1>
            <div className="grid">

                <div className="card">
                    <h2>Winter</h2>
                    <h4>1st June - August 31st</h4>
                    <ul>

                        <li>$200 per night</li>
                        <li>The pricing is for 2 people.</li>
                    </ul>

                    <h2>Summer</h2>
                    <h4>1st September - December 18th <br></br>
                    1st February - 31st May</h4>
                    <ul>
                        <li>$220 per night</li>
                        <li>Weekly Price $1,250</li>
                        <li>Monthly Price $5,400</li>
                    </ul>

                </div>
                <div className="card">
                    <h2>Terms and Conditions</h2><p></p>
                    <ul>
                        <li>Our accomodation is <b>pet-friendly</b>.</li>
                        <li>The apartment is strictly <b>non-smoking</b></li>
                        <li>Total amount is payable upon booking</li>
                        <li>A full refund will be given prior to 30 days cancellation</li>
                        <li>50% refund will be given after 30 days of cancellation</li>
                        <li>In the event of a weekly or monthly booking the apartment will be serviced weekly unless by
                    prior arrangement.</li></ul><p></p>
                    <h2>Act now!</h2>
                        <Link to="/contact" className="button">Book your stay</Link>
                        <p></p>
                        <p></p>
                        

                    

                </div>
            </div>




        </div>

    )
}

export default Pricing