import React, { useState } from 'react';
import './MembershipPage.css';
import BenefitItem from '../components/BenefitItem/BenefitItem';
import Button from '../components/Button/Button';

const MembershipPage = () => {
  const [membershipType, setMembershipType] = useState('student');
  
  const benefits = [
    { icon: "fas fa-book-reader", title: "Educational Resources" },
    { icon: "fas fa-users", title: "Networking" },
    { icon: "fas fa-certificate", title: "Certifications" },
    { icon: "fas fa-hands-helping", title: "Mentorship" },
    { icon: "fas fa-briefcase", title: "Job Opportunities" },
    { icon: "fas fa-chalkboard-teacher", title: "Workshops" },
    { icon: "fas fa-newspaper", title: "Publications" },
    { icon: "fas fa-award", title: "Recognition" }
  ];

  const membershipTypes = [
    {
      id: 'student',
      title: 'Student Membership',
      price: '₦5,000',
      period: 'per year',
      features: [
        'Access to all workshops and seminars',
        'Subscription to our quarterly magazine',
        'Eligibility for scholarships and grants',
        'Networking opportunities',
        'Access to online resources'
      ]
    },
    {
      id: 'professional',
      title: 'Professional Membership',
      price: '₦15,000',
      period: 'per year',
      features: [
        'All student benefits',
        'Continuing education credits',
        'Professional development resources',
        'Mentorship opportunities',
        'Discounted conference rates',
        'Job placement assistance'
      ]
    },
    {
      id: 'lifetime',
      title: 'Lifetime Membership',
      price: '₦100,000',
      period: 'one-time',
      features: [
        'All professional benefits',
        'Permanent access to all resources',
        'VIP event invitations',
        'Recognition in association publications',
        'Voting rights in association matters',
        'Complimentary conference attendance'
      ]
    }
  ];

  return (
    <div className="membership-page">
      <section className="membership-hero">
        <div className="membership-hero__content">
          <h1>NAURADSA Membership</h1>
          <p>Join our community and unlock exclusive benefits for radiography students and professionals</p>
        </div>
      </section>

      <section className="benefits-overview">
        <div className="benefits-overview__container">
          <h2>Membership Benefits</h2>
          <p className="benefits-overview__subtitle">As a NAURADSA member, you'll gain access to valuable resources and opportunities</p>
          
          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <BenefitItem
                key={index}
                icon={benefit.icon}
                title={benefit.title}
              >
                {benefit.description}
              </BenefitItem>
            ))}
          </div>
        </div>
      </section>

      {/* <section className="membership-options">
        <div className="membership-options__container">
          <h2>Membership Options</h2>
          <p className="membership-options__subtitle">Choose the plan that works best for you</p>
          
          <div className="membership-tabs">
            {membershipTypes.map(type => (
              <button
                key={type.id}
                className={`membership-tab ${membershipType === type.id ? 'active' : ''}`}
                onClick={() => setMembershipType(type.id)}
              >
                {type.title}
              </button>
            ))}
          </div>
          
          <div className="membership-plans">
            {membershipTypes
              .filter(type => type.id === membershipType)
              .map(type => (
                <div key={type.id} className="membership-plan">
                  <div className="membership-plan__header">
                    <h3>{type.title}</h3>
                    <div className="membership-plan__price">
                      {type.price} <span>{type.period}</span>
                    </div>
                  </div>
                  
                  <ul className="membership-plan__features">
                    {type.features.map((feature, i) => (
                      <li key={i} className="membership-plan__feature">
                        <i className="fas fa-check-circle"></i> {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Button variant="primary" className="membership-plan__button">
                    Select Plan
                  </Button>
                </div>
              ))}
          </div>
        </div>
      </section> */}

      {/* <section className="testimonials">
        <div className="testimonials__container">
          <h2>What Our Members Say</h2>
          
          <div className="testimonials__grid">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="testimonial">
                <div className="testimonial__content">
                  <p>
                    "Joining NAURADSA transformed my educational journey. The workshops and networking opportunities 
                    helped me secure an internship at a top hospital even before graduation."
                  </p>
                </div>
                <div className="testimonial__author">
                  <div className="testimonial__author-avatar"></div>
                  <div>
                    <h4>Member Name</h4>
                    <p>Position, Institution</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      <section className="faq">
        <div className="faq__container">
          <h2>Frequently Asked Questions</h2>
          
          <div className="faq__list">
            {faqItems.map((item, i) => (
              <div key={i} className="faq__item">
                <h3 className="faq__question">{item.question}</h3>
                <p className="faq__answer">{item.answer}</p>
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
    question: "Who can join NAURADSA?",
    answer: "NAURADSA membership is open to all radiography students at Nnamdi Azikiwe University. We also offer professional membership for graduates working in the field."
  },
  {
    question: "How long does membership last?",
    answer: "Student membership is valid for as long as the person remains a student of Radiography Department in Nnamdi Azikiwe University. Upon graduation, the member automatically joins the NAURADSA Alumni."
  },
  {
    question: "How do I become a member?",
    answer: "Just gained admission through JAMB into Radiography Department of Nnamdi Azikiwe University. After which, obtain your NAURADSA ID CARD and pay the little but necessary dues required from time to time."
  }
];

export default MembershipPage;