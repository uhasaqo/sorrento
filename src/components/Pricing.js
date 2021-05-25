import {Banner} from './Banner'
import BannerImage from '../banners/nao-takabayashi-uM9EEuc69g0-unsplash (1).jpg'
import '../styles/Pricing.css'

export function Pricing ( props ) {
    return(
        <div className="Pricing">
            <Banner image={BannerImage} altText="Pricing" label="Pricing"/>
            <br></br>
                <h2>Pricing</h2>
                <div className="grid">
                    <div className="card">
                    <h3>Winter</h3>
                        <ul>
                            <li>1st June - August 31st</li>    
                            <li>$200 per night</li>
                            <li>The pricing is for 2 people.</li>
                            </ul>
                
                    <div className="card">
                        <h3>Summer</h3> 
                            <ul>
                                <li>1st September - December 18th</li>
                                <li>1st February - 31st May</li>    
                                <li>$220 per night</li>
                                <li>Weekly Price $1,250</li>
                                <li>Monthly Price $5,400</li>
                            </ul>
                    </div>
                </div>
            </div>
                <div className="card2">
            <h4>Terms and Conditions</h4><p></p>    
            <ul>
                <li>The apartment is strictly non-smoking</li>
                <li>Total amount is payable upon booking</li>
                <li>A full refund will be given prior to 30 days cancellation</li>
                <li>50% refund will be given after 30 days of cancellation</li>
                <li>In the event of a weekly or monthly booking the apartment will be serviced weekly unless by 
                    prior arrangement.</li>
            </ul>
            </div>                                                                       
            <button id ="button" type ="submit"
            action=""
            method="post"   
            >Book now</button>
            {/* put a button here */}
            
        </div>

        )
    }

    export default Pricing 