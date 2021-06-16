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
                        {/* Check-in date */}
                        <label htmlFor="Check-in">Check-in date: </label>
                        <input id="check-in" name="check-in" type="date" />
                        {/* Check-out date */}
                        <label htmlFor="Check-out">Check-out date: </label>
                        <input id="check-out" name="check-out" type="date" />
                        {/* Number of guests */}
                        <label htmlFor="Number of guests">Number of guests: </label>
                        <input id="numberofguests" name="numberofguests" min="1" max="4" type="number" placeholder="Please select (4 guests max.)" />
                        {/* Contact form message */}
                        <label htmlFor="commentbox">Message: </label>
                        <textarea id="message" rows="5" cols="100" required min='10' max='100' label="Text area for your message" placeholder="Please enter your message and your booking dates!"></textarea>
                        {/* Contact form button */}
                        <button id="button" type="submit"
                            action="mailto:your@email.com"
                            method="post" onSubmit=""
                        > Submit</button>

                    </form>
                </div>
                <div className="card">

                    <h1>Sorrento by the Sea Apartment</h1>
                    <b>Information and bookings:</b>  0435 123 456<br></br>
                    <b>Address:</b> 42 Holyrood Avenue Sorrento, VIC Australia 3943
                    <p></p>
                    <iframe title="Sorrento Map" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d25033.668401326737!2d144.73752050073804!3d-38.34415483093594!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad4357b0e516369%3A0xf1dce538da37e359!2s42%20Holyrood%20Ave%2C%20Sorrento%20VIC%203943!5e0!3m2!1sen!2sau!4v1623828307180!5m2!1sen!2sau" height="580" width="470" allowFullScreen="" frameborder="0" loading="eager"></iframe>

                </div>
            </div>


        </div>
    )
}

export default Contact
