import './Contacts.css'
import { SocialIcon } from 'react-social-icons'

export default function Contacts({ isDarkMode }) {

    return(
        <section className="Contacts_contatiner">
            <div className='Header_Contatiner'>
                <h1 className='Contact_Header'>Let's talk Buisness</h1>
                <h2 className='Contact_Subheader'>Now that you know a lot about me, let me know if you are interested to work with me.</h2>
            </div>
            <div class="contact-details">
                <div class="contact-item">
                    <h3>Email:</h3>
                    <p><a href="mailto:mohamedshaheen20.ea@gmail.com" class="contact-link email-link">mohamedshaheen20.ea@gmail.com</a></p>
                </div>
                <div class="contact-item">
                    <h3>Social Media @ </h3>
                    <div class="social-icons">
                        <SocialIcon url="https://www.linkedin.com/in/mohamed-shaheen-128263218/" />
                        <SocialIcon url="mailto:mohamedshaheen20.ea@gmail.com" />
                    </div>
                </div>
            </div>
        </section>
    );
}

