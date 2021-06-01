import '../styles/Contact.css'



export function Contact(props) {
    return (
        <div className="Contact">
            <div class="grid">
                <div class="card">
                    <h2>Contact Us</h2>

                    <form id="contact-form"
                        action="https://example.com/handler"
                        method="post"
                    >
                        {/* name */}
                        <label htmlFor="name">Name: </label>
                        <input id="name" name="name" type="text" placeholder="Your name" />
                        {/* email */}
                        <label htmlFor="email">Email: </label>
                        <input id="email" name="email" type="text" placeholder="your@email.com" />
                        {/* message */}
                        <label htmlFor="name">Message: </label>
                        <textarea id="message" rows="5" cols="100" placeholder="Please enter your message here."></textarea>
                        {/* <button type="reset">Clear form</button> */}
                        <button type="submit">Submit</button>
                    </form>
                </div>
                <div class="card">
                    
                    Sorrento by the Sea Apartment - Luxury Self Contained Apartment
                    <h4>Information and Bookings:</h4>
                    0435 123 456 <br></br>
                    <h4>Street address:</h4>
                    42 Holyrood Avenue
                    Sorrento VIC 3943
                    <p></p>
                    <iframe title="Sorrento Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12516.409115277997!2d144.74699834299852!3d-38.34661470898575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad4357b0e516369%3A0xf1dce538da37e359!2s42%20Holyrood%20Ave%2C%20Sorrento%20VIC%203943%2C%20Australien!5e0!3m2!1sde!2sat!4v1622465336529!5m2!1sde!2sat" height="350" width="400" allowfullscreen="" loading="eager"></iframe>
                    {/* <img src = {ApptBath} text = "Apartment bath" /> */}

                </div>
            </div>


        </div>
    )
}

export default Contact
