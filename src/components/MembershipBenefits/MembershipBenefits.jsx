import React from 'react';
import './MembershipBenefits.css';
import BenefitItem from '../BenefitItem/BenefitItem';
import Button from '../Button/Button';

const MembershipBenefits = () => {
  const benefits = [
    {
      icon: "fas fa-book-reader",
      title: "Educational Resources",
      description: "Access to exclusive study materials, journals, and research papers in radiography."
    },
    {
      icon: "fas fa-users",
      title: "Networking",
      description: "Connect with peers, alumni, and industry professionals through our events and platforms."
    },
    {
      icon: "fas fa-certificate",
      title: "Certifications",
      description: "Discounted access to professional certifications and continuing education courses."
    },
    {
      icon: "fas fa-hands-helping",
      title: "Mentorship",
      description: "One-on-one guidance from experienced professionals and faculty members."
    },
    {
      icon: "fas fa-briefcase",
      title: "Job Opportunities",
      description: "Early access to job postings, internships, and career development resources."
    },
    {
      icon: "fas fa-chalkboard-teacher",
      title: "Workshops",
      description: "Participate in skill-building workshops and professional development seminars."
    },
    {
      icon: "fas fa-newspaper",
      title: "Publications",
      description: "Opportunity to contribute to our magazine and gain recognition for your work."
    },
    {
      icon: "fas fa-award",
      title: "Recognition",
      description: "Awards and recognition for academic excellence and contributions to the field."
    }
  ];

  return (
    <section id="membership" className="benefits">
      <div className="benefits__container">
        <h2 className="benefits__title">Membership Benefits</h2>

        <div className="benefits__grid">
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

        <div className="benefits__button-container">
          <Button variant="primary">Join NAURADSA</Button>
        </div>
      </div>
    </section>
  );
};

export default MembershipBenefits;