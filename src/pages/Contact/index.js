import "./style.css";
import Avatar from '../../components/Avatar'

const Contact = () => {
return (
    <div className="contact">
    <Avatar defaultImage="/avatar.svg" hoverImage="/hover_avatar.svg" />
    <h1>Contact me!</h1>
    <h4>Phone</h4>
    <p>+54 342 154058455</p>

    <h4>Email</h4>
    <p>monzondefranco@gmail.com</p>

    <h4>Address</h4>
    <p>Montevideo 771</p>
    <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26278.115533139757!2d-58.41385243753644!3d-34.584826449705275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca99c609fc2f%3A0x392ca99351808a75!2sRecoleta%2C%20CABA!5e0!3m2!1ses-419!2sar!4v1615952554957!5m2!1ses-419!2sar" 
        frameBorder="0"
        allowFullScreen=""
        aria-hidden="false"
        tabIndex="0"
        ></iframe>
    </div>
);
};

export default Contact;