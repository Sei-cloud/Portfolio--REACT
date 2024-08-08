import React from 'react';
import '../assets/css/app.css';

const Contact = () => (
  <section id="contact">
    <h1>Contact</h1>
    <form>
      <label>
        Name:
        <input type="text" name="name" required />
      </label>
      <label>
        Email:
        <input type="email" name="email" required />
      </label>
      <label>
        Message:
        <textarea name="message" required></textarea>
      </label>
      <button type="submit">Send</button>
    </form>
  </section>
);

export default Contact;
