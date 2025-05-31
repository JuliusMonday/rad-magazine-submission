import React, { useState } from 'react';
import './MagazinePage.css';
import Button from '../components/Button/Button';
import Cover1 from "../assets/Magazineissue.jpeg";
const MagazinePage = () => {
  const [activeTab, setActiveTab] = useState('current');
  
  const issues = {
    current: [
      {
        id: 1,
        title: "Radiocomm Magazine 2025: The Rad Odysseys",
        description: "A narrative or documentary that follows the adventures or challenges of radiographers, medical imaging professionals and/or patients undergoing radiographic examination.",
        date: "March 2025",
        cover: Cover1
      }
    ],
    past: [
      
    ]
  };

  return (
    <div className="magazine-page">
      <section className="magazine-hero">
        <div className="magazine-hero__content">
          <h1>he Radiocomm Magazine</h1>
          <p>NAURADSA's Annual magazine featuring research, insights, and industry trends</p>
        </div>
      </section>

      <section className="magazine-tabs">
        <div className="magazine-tabs__container">
          <button 
            className={`magazine-tab ${activeTab === 'current' ? 'active' : ''}`}
            onClick={() => setActiveTab('current')}
          >
            Current Issue
          </button>
          <button 
            className={`magazine-tab ${activeTab === 'past' ? 'active' : ''}`}
            onClick={() => setActiveTab('past')}
          >
            Past Issues
          </button>
        </div>
      </section>

      <section className="magazine-content">
        <div className="magazine-content__container">
          {activeTab === 'current' && (
            <div className="current-issue">
              <div className="current-issue__cover">
                <img src={issues.current[0].cover} alt={issues.current[0].title} />
              </div>
              
              <div className="current-issue__details">
                <h2>{issues.current[0].title}</h2>
                <p className="current-issue__date">{issues.current[0].date}</p>
                <p className="current-issue__description">{issues.current[0].description}</p>
                
                <div className="current-issue__highlights">
                  <h3>In This Issue:</h3>
                  <ul>
                    <li>Advances in Digital Radiography Technology</li>
                    <li>Interview with various professional radiographers and enterprenuers</li>
                    <li>Student Research Spotlight</li>
                    <li>Career Pathways: Specializations in Radiography</li>
                    <li>Radiography Opinion Polls, Jokes, Poems, Puzzle games</li>
                  </ul>
                </div>
                
                <div className="current-issue__actions">
                  <Button variant="primary">Read Online</Button>
                  <Button variant="outline">Download PDF</Button>
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'past' && (
            <div className="past-issues">
              <div className="past-issues__grid">
                {issues.past.map(issue => (
                  <div key={issue.id} className="issue-card">
                    <div className="issue-card__cover">
                      <img src={issue.cover} alt={issue.title} />
                    </div>
                    <div className="issue-card__content">
                      <h3>{issue.title}</h3>
                      <p className="issue-card__date">{issue.date}</p>
                      <p className="issue-card__description">{issue.description}</p>
                      <Button variant="outline">View Issue</Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="contribution">
        <div className="contribution__container">
          <div className="contribution__content">
            <h2>Contribute to Our Magazine</h2>
            <p>
              We welcome submissions from students, faculty, and professionals. Share your research, 
              case studies, or insights with our community.
            </p>
            <div className="contribution__guidelines">
              <h3>Submission Guidelines:</h3>
              <ul>
                <li>Articles should be 100-500 words</li>
                <li>Include relevant images with proper attribution</li>
                <li>Submissions should be in English</li>
                <li>Submissions must be original work</li>
              </ul>
            </div>
            <Button variant="primary">Submit your Opinion</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MagazinePage;