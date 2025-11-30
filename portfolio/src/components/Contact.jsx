import React from "react";
import emailjs from "emailjs-com";
import bg from "../assets/hero-bg.jpg";

function Contact() {
  
  const sendEmail = (e) => {
    e.preventDefault(); // Prevent page reload

    emailjs.sendForm(
      "service_h6bakel",      // Replace with your EmailJS service ID
      "template_oaappxl",     // Replace with your EmailJS template ID
      e.target,               // The form element
      "hVoGytnxRdwp82H6M"       // Replace with your EmailJS public key
    )
    .then((result) => {
      console.log(result.text);
      alert("Message sent successfully!");
      e.target.reset(); // Clear form after sending
    }, (error) => {
      console.log(error.text);
      alert("Oops! Something went wrong.");
    });
  };

  return (
    <section className="contact section-bg" id="contact" style={{backgroundImage: `url(${bg})`}}>
      <h2>Get in <span>Touch</span></h2>
      <h4>Have a project in mind or want to collaborate? Feel free to reach out!</h4>
      <form onSubmit={sendEmail}>
        <input type="text" name="name" placeholder="Name" required />
        <input type="email" name="email" placeholder="Email" required />
        <textarea name="message" placeholder="Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
      <p>Email: <a href="mailto:k.niveka03@gmail.com">k.niveka03@gmail.com</a></p>
    </section>
  );
}

export default Contact;
