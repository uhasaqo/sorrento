import '../styles/Home.css'
import '../App.css'
import { Banner } from './Banner'
import BannerImage from '../banners/pat-whelen-GlmJnvANTrg-unsplash.jpg'

export function Home(props) {
    return (

        <div className="home">
            <div className="banner">
                <Banner image={BannerImage} altText="Welcome to Sorrento by the Sea" /></div>
            <br></br>
            <h1>Welcome to Sorrento by the Sea</h1>
            <div className="grid">
                <div className="card">
                    <h2>About</h2>
                    <h3>A luxury self-contained and pet-friendly apartment</h3>
                    <p>On the Mornington Peninsula (one hour from Melbourne) next door to Portsea.
                        Our apartment is a lazy 10-minute walk from the relaxed township of Sorrento that offers restaurants, cafes, a chemist, a supermarket, a butcher and lots more. It is located in a quiet avenue, just 4 houses from the beach. It is in easy walking distance of the ocean beaches and surf.</p>
                    <p>Your private luxury apartment consists of a spacious living area with leather lounge suite overlooking a sun drenched, tree-filled private garden.A separate kitchenette has everything you need to make your stay relaxed and comfortable. A queen sized bedroom and an amazing bathroom complete with free standing black bath entices you to relax and unwind. </p>
                    <p>
                        Two TVs are sure to make everyone happy!  An undercover BBQ area with seating offers plenty of space to stretch out and enjoy that cup of freshly brewed coffee or a glass of wine. This is the perfect place for a home away from home. </p>
                    <h2>Testimonials</h2>
                    <h3>Here's what some of our lovely guests had to say...</h3>
                    <p></p>
                        <i>"So sorry we had to go home after only one night. We will definitely stay two nights next time!"
                        <p>"This apartment is close to everything. We didn't need the car as the walks were amazing"</p>
                        <p>"Cosy and comfortable. We imagined we owned it and enjoyed being spoilt.  Thank you."</p>
                        <p>"What a magical stay at such an amazing place. Completely self-contained and very private. We loved it and will return again and again."</p>
                        <p>"Never felt so spoilt. A perfect get away and so close to everything. We had the best bath ever!"</p>
                        <p>"Relaxing in that sunny garden watching our dog chasing balls. Let me stay forever!"</p></i>
                </div>
                <div className="card">
                    <p></p>

                    <iframe width="490" height="310" src="https://www.youtube.com/embed/KE0SbDBw-ok" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture: center" allowFullScreen></iframe>

                    <h2>Getting there</h2>
                    <h3>How to get to Sorrento by the Sea </h3>
                    <p>It is easy to find. From Melbourne, take the Monash Freeway, connect onto the Eastlink heading for Portsea, then onto the Peninsula link to Sorrento. Another option is the scenic drive around the beach. Although longer, it allows you to experience the coastline from Port Melbourne to Sorrento. </p>
                    <p>If you choose to come across on the Queenscliff/Sorrento Ferry, it is only a 2 minute drive from the Ferry Depot. If you are a foot passenger we are happy to meet you at the Sorrento ferry - just phone us on <b><a href= "tel:0435 123 456" title="Click to call us!">0435 123 456</a></b> as you arrive.</p>

                    <iframe title="Sorrento Map" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d25033.668401326737!2d144.73752050073804!3d-38.34415483093594!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad4357b0e516369%3A0xf1dce538da37e359!2s42%20Holyrood%20Ave%2C%20Sorrento%20VIC%203943!5e0!3m2!1sen!2sau!4v1623828307180!5m2!1sen!2sau" height="330" width="490" frameborder="0" loading="eager"></iframe>
                </div>
            </div>
        </div>


    )
}

export default Home