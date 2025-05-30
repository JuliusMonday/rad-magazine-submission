import React, { useState } from 'react';
import './MagazinePage.css';
import Button from '../components/Button/Button';

const MagazinePage = () => {
  const [activeTab, setActiveTab] = useState('current');
  
  const issues = {
    current: [
      {
        id: 1,
        title: "Spring 2023: Innovations in Medical Imaging",
        description: "Exploring the latest technological advancements in radiography and their impact on patient care.",
        date: "March 2023",
        cover: "https://readdy.ai/api/search-image?query=professional%20medical%20journal%20cover%2C%20radiography%20magazine%2C%20spring%202023%2C%20innovations%20in%20medical%20imaging%2C%20high%20quality%20design%2C%20educational%20publication&width=300&height=400&orientation=portrait"
      }
    ],
    past: [
      {
        id: 2,
        title: "Winter 2022: Radiation Safety in Modern Practice",
        description: "Comprehensive guide to radiation protection protocols and best practices for radiographers.",
        date: "December 2022",
        cover: "https://readdy.ai/api/search-image?query=radiography%20magazine%20cover%2C%20winter%202022%2C%20radiation%20safety%2C%20professional%20publication%2C%20medical%20imaging%2C%20educational%20journal&width=300&height=400&orientation=portrait"
      },
      {
        id: 3,
        title: "Fall 2022: Career Pathways in Radiography",
        description: "Exploring diverse career opportunities and specializations in the radiography field.",
        date: "September 2022",
        cover: "https://readdy.ai/api/search-image?query=radiography%20magazine%20cover%2C%20fall%202022%2C%20career%20pathways%2C%20professional%20development%2C%20medical%20imaging%20careers%2C%20educational%20journal&width=300&height=400&orientation=portrait"
      },
      {
        id: 4,
        title: "Summer 2022: Advances in Diagnostic Imaging",
        description: "Cutting-edge techniques and technologies transforming diagnostic radiology practices.",
        date: "June 2022",
        cover: "https://readdy.ai/api/search-image?query=radiography%20magazine%20cover%2C%20summer%202022%2C%20diagnostic%20imaging%2C%20medical%20technology%2C%20professional%20publication%2C%20educational%20journal&width=300&height=400&orientation=portrait"
      },
      {
        id: 5,
        title: "Spring 2022: Student Research Highlights",
        description: "Showcasing exceptional research projects by radiography students across Nigeria.",
        date: "March 2022",
        cover: "https://readdy.ai/api/search-image?query=radiography%20magazine%20cover%2C%20spring%202022%2C%20student%20research%2C%20academic%20publication%2C%20medical%20imaging%20education%2C%20educational%20journal&width=300&height=400&orientation=portrait"
      }
    ]
  };

  return (
    <div className="magazine-page">
      <section className="magazine-hero">
        <div className="magazine-hero__content">
          <h1>The Radiography Pulse</h1>
          <p>NAURADSA's quarterly magazine featuring research, insights, and industry trends</p>
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
                    <li>Interview with Dr. Sarah Johnson, Chief Radiologist</li>
                    <li>Student Research Spotlight: Radiation Safety Innovations</li>
                    <li>Career Pathways: Specializations in Radiography</li>
                    <li>Alumni Success Stories: Where Are They Now?</li>
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
                <li>Articles should be 800-1500 words</li>
                <li>Include relevant images with proper attribution</li>
                <li>References should follow APA format</li>
                <li>Submissions must be original work</li>
              </ul>
            </div>
            <Button variant="primary">Submit an Article</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MagazinePage;