import React, { useState } from 'react';
import { hiContent } from '../../Data/Content';
import './Hi.css';

const Hi = () => {
  const [activeCard, setActiveCard] = useState('vision');

  return (
    <div className="hi-container">
      <section className="intro-section">
        <div className="intro-text">
          <p>{hiContent.intro.brief}</p>
        </div>
        <div className="intro-image">
          <img src="/Images/timo-profile.jpg" alt="Timo" className="profile-image" />
        </div>
      </section>

      <div className="cards-stack-container">
        {/* Vision Card */}
        <section 
          className={`info-card vision-card ${activeCard === 'vision' ? 'is-active' : 'is-stacked'}`}
          onClick={() => setActiveCard('vision')}
        >
          <div className="card-tag">My vision as a designer</div>
          <h2 className="section-title">{hiContent.vision.title}</h2>
          <div className="card-content">
            {hiContent.vision.paragraphs.map((para, index) => (
              <p key={index}>{para}</p>
            ))}
          </div>
        </section>

        {/* Identity Card */}
        <section 
          className={`info-card identity-card ${activeCard === 'identity' ? 'is-active' : 'is-stacked'}`}
          onClick={() => setActiveCard('identity')}
        >
          <div className="card-tag">my professional identity</div>
          <h2 className="section-title">{hiContent.identity.title}</h2>
          <div className="card-content">
            {hiContent.identity.paragraphs.map((para, index) => (
              <p key={index}>{para}</p>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Hi;