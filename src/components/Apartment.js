import "../styles/Apartment.css"
import { Banner } from './Banner'
import BannerImage from '../banners/banner-gaiser.jpg'
import Footer from '../components/Footer.js'

export function Apartment(props) {
    return (



            <div className="apartment">
                <Banner image={BannerImage} altText="The Apartment" />
                <br></br>

                <h2>The Apartment</h2>

                <div className="card">
                    We are <b>pet friendly</b> and offer:
            <ul>
                        <li>A Queen-sized bedroom suite</li>
                        <li>A spacious living area overlooking a beautiful garden</li>
                        <li>A modern and elegant bathroom</li>
                        <li>A private entrance that allows you to come and go as you please.</li>
                        <li>Car parking is close by, with room for a boat as well!</li></ul><p></p></div>
                <div className="card2">
                    Your <b>luxury apartment</b> consists of: <ul><li>A spacious separate living area with leather furniture overlooking a private garden for you to enjoy.</li>
                        <li>A separate Queen sized bedroom suite with quality linen, overlooking the garden.</li>
                        <li>A modern, elegant bathroom that has a luxurious bath, enticing you to unwind and relax whilst overlooking a private courtyard fernery.</li>
                        <li>The kitchenette provides everything you will need for a relaxing breakfast, including a coffee machine and a variety of coffee pods for your enjoyment.</li>
                        <li>Two TVs will keep everyone happy along with a DVD player, stereo system and games galore.</li>
                        <li>An undercover area complete with BBQ and shady seating that offers plenty of space to stretch out and enjoy that cup of freshly brewed coffee or glass of wine.</li> </ul>
                    <p><b>Sit back and relax</b> and take a breather. Read a book, go for a beach walk, have a sleep-in. It’s your private space to enjoy.</p>
                    <p><b>Amenities</b> include top quality bedding, fluffy towels, bath robes, vanity packs, hair dryer, beach towels and chairs, a picnic basket, coffee machine and pods, a microwave/convection oven, a toaster, a kettle, a sandwich maker and BBQ tools. We offer locally sourced provisions for a hearty breakfast together with home-made biscuits and chocolates.
                </p></div>


                {/* <footer ID="footer">
            © 2021 - Sorrento by the Sea
            </footer> */}
            </div>




    )

}

export default Apartment