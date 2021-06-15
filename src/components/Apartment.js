import "../styles/Apartment.css"
import { Banner } from "./Banner"
import BannerImage from "../banners/banner-gaiser.jpg"
import ApptFront from "../images/apartment_front.jpg"
import ApptBath from "../images/apartment_bath.jpg"
import ApptGarden from "../images/apartment_garden.jpg"


export function Apartment(props) {
    return (

        <div className="apartment">
            <Banner image={BannerImage} alt="Sorrento Back Beach shoreline" label="Sorrento Back Beach shoreline" />
            <br></br>

            <h1>The Apartment</h1>
            <div className="grid">
                <div className="card">
                    <h3>We are pet friendly and offer:</h3>
                    <ul>
                        <li>A Queen-sized bedroom suite</li>
                        <li>A spacious living area overlooking a beautiful garden</li>
                        <li>A modern and elegant bathroom</li>
                        <li>A private entrance that allows you to come and go as you please.</li>
                        <li>Car parking is close by, with room for a boat as well!</li></ul><p></p>
                    <p>
                        <h3>Your luxury apartment consists of:</h3>
                        <ul><li>A spacious separate living area with leather furniture overlooking a private garden for you to enjoy.</li>
                            <li>A separate Queen sized bedroom suite with quality linen, overlooking the garden.</li>
                            <li>A modern, elegant bathroom that has a luxurious bath, enticing you to unwind and relax whilst overlooking a private courtyard fernery.</li>
                            <li>The kitchenette provides everything you will need for a relaxing breakfast, including a coffee machine and a variety of coffee pods for your enjoyment.</li>
                            <li>Two TVs will keep everyone happy along with a DVD player, stereo system and games galore.</li>
                            <li>An undercover area complete with BBQ and shady seating that offers plenty of space to stretch out and enjoy that cup of freshly brewed coffee or glass of wine.</li> </ul>
                        <p><h3>Sit back and relax and take a breather</h3> Read a book, go for a beach walk, have a sleep-in. It’s your private space to enjoy.</p>
                        <p>
                            <h3>Amenities</h3> Top quality bedding, fluffy towels, bath robes, vanity packs, hair dryer, beach towels and chairs, a picnic basket, coffee machine and pods, a microwave/convection oven, a toaster, a kettle, a sandwich maker and BBQ tools. <p>We also offer locally sourced provisions for a hearty breakfast together with home-made biscuits and chocolates.</p>
                        </p>
                    </p>
                </div>

                <div className="card">
                    <figure>
                        < img src={ApptFront} text="Front view apartment" alt="Apartment front view" title="Apartment front view" />

                    </figure>
                    <figure>
                        <img src={ApptGarden} text="Apartment garden" alt="Apartment garden" title="Apartment garden" />

                    </figure>
                    <figure>
                        <img src={ApptBath} text="Apartment bath" alt="Apartment bath" title="Apartment bathroom" height="300" />

                    </figure>
                </div>


            </div>
        </div>




    )

}

export default Apartment