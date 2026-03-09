import React, { useState } from 'react';
import { expertiseIntersections } from '../../Data/Content';
import './ExpertiseVisual.css';

const ExpertiseVisual = () => {
  const [activeId, setActiveId] = useState(null);

  const handleHover = (id) => setActiveId(id);

  return (
    <div className="expertise-visual-container">
      <div className="svg-wrapper">
        <svg viewBox="0 0 500 500" className="venn-diagram">
          {/* Visual Circles - The 'Look' */}
          <g className="visual-layers">
            <circle cx="250" cy="180" r="110" className="v-circle us" />
            <circle cx="340" cy="260" r="110" className="v-circle mdc" />
            <circle cx="290" cy="360" r="110" className="v-circle be" />
            <circle cx="210" cy="360" r="110" className="v-circle tr" />
            <circle cx="160" cy="260" r="110" className="v-circle ca" />
          </g>

          {/* INTERACTIVE PATHS - The 'Logic' */}
          {/* These are the specific selectable areas. You define the shape of the overlap here */}
          <path 
            id="us_be_overlap"
            d="M250,180 A110,110 0 0,1 290,360 A110,110 0 0,1 250,180" 
            className="intersect-path"
            onMouseEnter={() => handleHover('us_be')}
          />
          
          {/* Repeat <path> for every intersection you want to be selectable */}
          {/* Use the DRP center as a main anchor */}
          <circle cx="250" cy="285" r="45" className="drp-node" onMouseEnter={() => handleHover('drp')} />

          {/* Labels - Positioned to not interfere with paths */}
          <text x="250" y="120" className="label">US</text>
          <text x="410" y="260" className="label">MDC</text>
          <text x="330" y="440" className="label">BE</text>
          <text x="170" y="440" className="label">TR</text>
          <text x="90" y="260" className="label">CA</text>
        </svg>
      </div>

      <div className="info-panel">
        <h3>{expertiseIntersections[activeId]?.title || "Integration"}</h3>
        <p>{expertiseIntersections[activeId]?.description || "Hover over any intersection to see the specific connection."}</p>
      </div>
    </div>
  );
};

export default ExpertiseVisual;