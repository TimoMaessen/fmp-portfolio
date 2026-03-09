import React, { useState } from 'react';
import { developmentContent } from '../../Data/Content';
import './Development.css';

const Development = () => {
  const [activeId, setActiveId] = useState('tr');
  const activeArea = developmentContent.areas.find(a => a.id === activeId);

  return (
    <div className={`dev-container active-ea-${activeId}`}>
      <header className="dev-header">
        {/* <h1>{developmentContent.title}</h1> */}
        <p className="dev-intro">{developmentContent.intro}</p>
      </header>

      <nav className="dev-quick-nav">
        {developmentContent.areas.map(area => (
          <button 
            key={area.id} 
            className={activeId === area.id ? 'active' : ''}
            onClick={() => setActiveId(area.id)}
          >
            {area.abbr}
          </button>
        ))}
      </nav>

      <div className="node-wrapper">
        {/* INPUTS - Arrows point TO main card */}
        <div className="node-column side-column">
          <p className="column-label">Influenced by:</p>
          {activeArea.inputs.map(input => (
            <div key={input.id} className="node-link-group">
              {/* In de map-functie van de mini-cards */}
<button 
  key={input.id} 
  className={`node-mini-card card-${input.id}`} // Voegt bijv. card-be toe
  onClick={() => setActiveId(input.id)}
>
  <span className="abbr">{input.id.toUpperCase()}</span>
  <p className="node-label">{input.label}</p>
</button>
             <div className={`arrow-container to-main weight-${input.weight}`}>
  <div className="arrow-shaft" />
</div>
            </div>
          ))}
        </div>

        {/* CENTER CARD */}
        <main className="node-main-card">
          <div className="card-header">
            {/* <span className="main-abbr">{activeArea.abbr}</span> */}
            <h2>{activeArea.title}</h2>
          </div>
          <div className="card-body">
            {activeArea.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
          </div>
        </main>

        {/* OUTPUTS - Arrows point FROM main card */}
        <div className="node-column side-column">
          <p className="column-label">Informing:</p>
          {activeArea.outputs.map(output => (
            <div key={output.id} className="node-link-group outgoing">
        
                 <div className={`arrow-container from-main weight-${output.weight}`}>
  <div className="arrow-shaft" />
</div>
              {/* In de map-functie van de mini-cards */}
<button 
  key={output.id} 
  className={`node-mini-card card-${output.id}`} // Voegt bijv. card-be toe
  onClick={() => setActiveId(output.id)}
>
  <span className="abbr">{output.id.toUpperCase()}</span>
  <p className="node-label">{output.label}</p>
</button>
            </div>
          ))}
        </div>
      </div>
      {/* Plaats dit onder de node-wrapper in je Development.js */}
{/* Plaats dit onder je node-wrapper in Development.js */}
<section className="ea-project-gallery">
  <h2 style={{ textAlign: 'center', letterSpacing: '2px', fontSize: '1.1rem', marginBottom: '20px' }}>
    A gallery illustrating the activities associated with {activeArea.title}
  </h2>
    <div className="tier-divider" />

  <div className="masonry-grid">
    {activeArea.projectImages && activeArea.projectImages.map((imgName, index) => (
      <div key={index} className="masonry-item">
        <img 
          /* Hier bouwen we het pad op: /Images/tr/sensorgrip.jpg */
          src={`${process.env.PUBLIC_URL}/${imgName}`} 
          alt='boeie' 
          loading="lazy"
        />
       
      </div>
    ))}
  </div>
</section>
    </div>
  );
};

export default Development;