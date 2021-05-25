import '../styles/Contact.css'


export function Contact ( props ) {
    return(
        <div className="Contact">
            <div class="row">
            <div class="column">
            <h2>Contact Us</h2>
           
           <form id="contact-form" 
           action="https://example.com/handler"
           method="post"   
           >
               {/* name */}
               <label htmlFor="name">Name: </label>
               <input id="name" name="name" type="text" placeholder="Your name"/>
               {/* email */}
               <label htmlFor="email">Email: </label>
               <input id="email" name="email" type="text" placeholder="your@email.com"/>
               {/* message */}
               <label htmlFor="name">Message: </label>
               <textarea id="message" rows="5" cols="40" placeholder="Please enter your message here."></textarea>
               {/* <button type="reset">Clear form</button> */}
               <button type="submit">Submit</button>
           

           </form>
           </div>
                <div class="column2">
                {/* <h3>Contact details</h3> */}
            <h4>Information and Bookings:</h4>
            0435 123 456 <br></br>
            <h4>Street address:</h4> 
            42 Holyrood Avenue
            Sorrento VIC 3943
            
                </div>
                </div>

            
        </div>
        )
    }

    export default Contact
