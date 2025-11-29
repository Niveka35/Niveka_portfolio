import React from "react";

function Contact() {
  return (
    <section className="contact section-bg" id="contact">
      <h2>Get in <span>Touch</span></h2>
      <h4>Have a project in mind or want to collaborate? Feel free to reach out!</h4>
      <form>
        <input type="text" placeholder="Name" required />
        <input type="email" placeholder="Email" required />
        <textarea placeholder="Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
      <p>Email: <a href="mailto:k.niveka03@gmail.com">k.niveka03@gmail.com</a></p>
    </section>
  );
}

export default Contact;
