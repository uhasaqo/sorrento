import '../styles/Contact.css'

export function Contact(props) {
    return (
        <div className="Contact">
            <div className="grid">
                <div className="card">
                    <h1>Contact Us</h1>

                    <form id="contact-form"
                        action="mailto:james.cotterell2@studytafensw.edu.au"
                        // "https://example.com/handler"
                        method="post">
                    
                        {/* Contact form name */}
                        <label htmlFor="name">Name: </label>
                        <input id="name" name="name" type="text" required min='2' max='50' placeholder="Your name" />
                        {/* Contact form email */}
                        <label htmlFor="email">Email: </label>
                        <input id="email" name="email" type="text" required max='50' placeholder="your@email.com" />
                        {/* Contact form phone */}
                        <label htmlFor="email">Phone: </label>
                        <input id="phone" name="phone" label="Phone number field"
                            type="text" min='10' max='10' placeholder="0400100200 (optional)" />
                        {/* Contact form message */}
                        <label htmlFor="name">Message: </label>
                        <textarea id="message" rows="5" cols="100" required min='10' max='100' label="Text area for your message" placeholder="Please enter your message and your booking dates!"></textarea>
                        {/* Contact form button */}
                        <button id="button" type="submit"
                            action="mailto:james.cotterell2@studytafensw.edu.au"
                            method="post" onSubmit=""
                        > Submit</button>

                    </form>
                </div>
                <div className="card">

                    <h1>Sorrento by the Sea Apartment</h1>
                    <b>Information and bookings:</b>  0435 123 456<br></br>
                    <b>Address:</b> 42 Holyrood Avenue Sorrento, VIC Australia 3943
                    <p></p>
                    <iframe title="Sorrento Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12516.656310437404!2d144.7430501309442!3d-38.34518425980529!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad4357b0e516369%3A0xf1dce538da37e359!2s42%20Holyrood%20Ave%2C%20Sorrento%20VIC%203943!5e0!3m2!1sen!2sau!4v1622652846722!5m2!1sen!2sau" height="300" width="470" allowFullScreen="" loading="eager"></iframe>

                </div>
            </div>


        </div>
    )
}

export default Contact
