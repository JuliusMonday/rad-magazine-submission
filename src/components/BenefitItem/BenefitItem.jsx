import React from 'react';
import './BenefitItem.css';

const BenefitItem = ({ icon, title, children }) => {
  return (
    <div className="benefit-item">
      <div className="benefit-item__icon">
        <i className={icon}></i>
      </div>
      <h3 className="benefit-item__title">{title}</h3>
      <p className="benefit-item__description">{children}</p>
    </div>
  );
};

export default BenefitItem;