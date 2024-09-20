import { useRef } from 'react'; 
import emailjs from '@emailjs/browser' 
import styles from './ContactStyles.module.css';

function Contact() {
  const form = useRef(); 

  const sendEmail = (e) => { 
    e.preventDefault(); 
    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID, 
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID, 
      form.current, 
      import.meta.env.VITE_EMAILJS_USER_ID
    ) 
      .then((result) => { 
          console.log(result.text); 
          alert('Email sent successfully!'); // Alert on success
      }, (error) => { 
          console.log(error.text);
          alert('Failed to send email. Please try again.'); // Alert on failure
      }); 
  }; 

  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contact</h1>
      <form ref={form} onSubmit={sendEmail}>
        <div className="formGroup">
          <label htmlFor="from_name" hidden>
            Name
          </label>
          <input
            type="text"
            name="from_name" // Updated to match EmailJS template
            id="from_name"
            placeholder="Your Name"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="email" hidden>
            Email
          </label>
          <input
            type="email" // Keep type as "email" for validation
            name="email_address" // Ensure this matches your EmailJS template
            id="email_address"
            placeholder="Your Email"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="message" hidden>
            Message
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            required></textarea>
        </div>
        <input className="hover btn" type="submit" value="Submit" />
      </form>
    </section>
  );
}

export default Contact;
