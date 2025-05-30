import React, { useState } from 'react';
import './ContactPage.css';
import Button from '../components/Button/Button';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="contact-hero__content">
          <h1>Contact Us</h1>
          <p>Get in touch with NAURADSA leadership and team members</p>
        </div>
      </section>

      <section className="contact-info">
        <div className="contact-info__container">
          <div className="contact-info__grid">
            <div className="contact-info__card">
              <div className="contact-info__icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <h3>Our Location</h3>
              <p>Department of Radiography</p>
              <p>Nnamdi Azikiwe University</p>
              <p>Awka, Anambra State, Nigeria</p>
            </div>
            
            <div className="contact-info__card">
              <div className="contact-info__icon">
                <i className="fas fa-envelope"></i>
              </div>
              <h3>Email Us</h3>
              <p>info@nauradsa.org</p>
              <p>support@nauradsa.org</p>
              <p>magazine@nauradsa.org</p>
            </div>
            
            <div className="contact-info__card">
              <div className="contact-info__icon">
                <i className="fas fa-phone"></i>
              </div>
              <h3>Call Us</h3>
              <p>+234 800 123 4567</p>
              <p>+234 800 765 4321</p>
              <p>Mon-Fri: 9am - 5pm</p>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-form-section">
        <div className="contact-form-section__container">
          <div className="contact-form-section__content">
            <h2>Send Us a Message</h2>
            <p>Have questions or feedback? Reach out to us directly</p>
            
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  required
                ></textarea>
              </div>
              
              <Button type="submit" variant="primary">Send Message</Button>
            </form>
          </div>
          
          <div className="contact-map">
            <div className="map-placeholder">
              <i className="fas fa-map-marker-alt"></i>
              <p>Map Location</p>
            </div>
          </div>
        </div>
      </section>

      <section className="faq-contact">
        <div className="faq-contact__container">
          <h2>Frequently Asked Questions</h2>
          
          <div className="faq-contact__grid">
            {faqItems.map((item, i) => (
              <div key={i} className="faq-item">
                <h3 className="faq-item__question">{item.question}</h3>
                <p className="faq-item__answer">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const faqItems = [
  {
    question: "How can I become a NAURADSA member?",
    answer: "You can join NAURADSA by visiting our Membership page and completing the registration form. Student membership is open to all radiography students at Nnamdi Azikiwe University."
  },
  {
    question: "Where can I access past magazine issues?",
    answer: "All past issues of our quarterly magazine are available in the Magazine section of our website. Members have full access to the complete archive."
  },
  {
    question: "How can I submit an article to the magazine?",
    answer: "We welcome submissions from students and professionals. Visit the Magazine page and click on 'Submit an Article' to view our guidelines and submission form."
  },
  {
    question: "How do I register for upcoming events?",
    answer: "Event registration is available on the Events page. Simply select the event you wish to attend and complete the registration form."
  }
];

export default ContactPage;