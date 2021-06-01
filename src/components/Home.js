import '../styles/Home.css'
import '../App.css'
import { Banner } from './Banner'
import BannerImage from '../banners/beth-hope-h_qQdUOxQ9Y-unsplash.jpg'

export function Home(props) {
    return (

        <div className="home">
            {/* <div className="video"> */}
            <iframe width="1024" height="480" src="https://www.youtube.com/embed/KE0SbDBw-ok" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            {/* </div> */}
            <h2>Welcome to Sorrento by the Sea</h2>
            <div className="grid">
                <div className="card">
                    <h3>About</h3>
                    <p>On the Mornington Peninsula (one hour from Melbourne) next door to Portsea.
            Our apartment is a lazy 10-minute walk from the relaxed township of Sorrento that offers restaurants, cafes, a chemist, a supermarket, a butcher and lots more. It is located in a quiet avenue, just 4 houses from the beach. It is in easy walking distance of the ocean beaches and surf.</p>
                    <p>Your private luxury apartment consists of a spacious living area with leather lounge suite overlooking a sun drenched, tree-filled private garden.A separate kitchenette has everything you need to make your stay relaxed and comfortable. A queen sized bedroom and an amazing bathroom complete with free standing black bath entices you to relax and unwind. </p>
                    <p>
                        Two TVs are sure to make everyone happy!  An undercover BBQ area with seating offers plenty of space to stretch out and enjoy that cup of freshly brewed coffee or a glass of wine. This is the perfect place for a home away from home.
            </p>
                </div>
                <div className="card">
                    <h3>Testimonials</h3>
                <p>"So sorry we had to go home after only one night. We will definitely stay two nights next time!"</p>
<p>"This apartment is close to everything. We didn't need the car as the walks were amazing"</p>
<p>"Your attention to detail made our stay so relaxed and comfortable. It was such a shame we had to drive back to our little flat, which is smaller than your apartment. We want to move in!"</p>
<p>"Cosy and comfortable. We imagined we owned it and enjoyed being spoilt.  Thank you."</p>
<p>"What a magical stay at such an amazing place. Completely self-contained and very private. We loved it and will return again and again."</p>
<p>"Never felt so spoilt. A perfect get away and so close to everything. We had the best bath ever!"</p>
<p>"A few minutes’ walk from the beach, picnic basket in hand and towel over the shoulder - can't think of anything better except that wonderful breakfast. That bacon is the best in Melbourne!"</p>
<p>Relaxing in that sunny garden watching our dog chasing balls. Let me stay forever!"</p>
            </div>
                <div className="card">
                    <h2>Getting there</h2>
                    <h3>How to get to Sorrento by the Sea </h3>
                    <p>It is easy to find. From Melbourne, take the Monash Freeway, connect onto the Eastlink heading for Portsea, then onto the Peninsula link to Sorrento. Another option is the scenic drive around the beach. Although longer, it allows you to experience the coastline from Port Melbourne to Sorrento. </p>
                    <p>If you choose to come across on the Queenscliff/Sorrento Ferry, it is only a 2 minute drive from the Ferry Depot. If you are a foot passenger we are happy to meet you at the Sorrento ferry. Just phone us on 0435 123 456 as you arrive.</p>
                </div>
                <div className="card">
                <iframe title="Sorrento Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12516.409115277997!2d144.74699834299852!3d-38.34661470898575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad4357b0e516369%3A0xf1dce538da37e359!2s42%20Holyrood%20Ave%2C%20Sorrento%20VIC%203943%2C%20Australien!5e0!3m2!1sde!2sat!4v1622465336529!5m2!1sde!2sat" height="350" width="480" allowfullscreen="" loading="lazy"></iframe>
                </div>
            </div>

        </div>


    )
}

export default Home