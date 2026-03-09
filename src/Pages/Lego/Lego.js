import React from 'react';
import { legoContent } from '../../Data/Content';
import './Lego.css';

const Lego = () => {
  // Helper om media te renderen (Video of Image)
  const renderMedia = (project) => {
    const mediaElements = [];

    // 1. Check voor video's (kan een string of een array zijn)
    if (project.videoId) {
      const ids = Array.isArray(project.videoId) ? project.videoId : [project.videoId];
      ids.forEach(id => {
        mediaElements.push(
          <iframe
            key={id}
            src={`https://www.youtube.com/embed/${id}`}
            title={project.title}
            frameBorder="0"
            allowFullScreen
          ></iframe>
        );
      });
    }

    // 2. Check voor afbeeldingen
    if (project.image) {
      mediaElements.push(
        <img 
          key={project.image}
          src={`${process.env.PUBLIC_URL}${project.image}`} 
          alt={project.title} 
        />
      );
    }

    return mediaElements;
  };

  return (
    <div className="lego-page">
      <section className="lego-intro">
        <h1>My LEGO journey</h1>
        <h2 className="subtitle">From tinkerer to engineer...</h2>
        <div className="intro-text">
          <p>From the age of 10 I loved building my own complex and embedded LEGO machines from scratch. Lego building has taught me a lot that I benefit from as an Industrial Design student.</p>
          <p>Thinking ahead on the functionalities of the various mechanisms, how the machine should be built in sequential layers, and how sensors and actuators could be used to develop meaningful experiences, all helped me get an insight into the engineering side of things. I believe this is where my passion for prototyping was sparked and why I am good at it.</p>
            <p>Building these machines also taught me how to work systematically and for the first time I touched upon iterative design: in my experiences, the first version of an intended mechanism does not work perfectly the first time, and you have to tweak and try out features over and over again. This taught me to be resilient, as building such machines can take forever and requires a lot of perseverance to overcome the vast amount of failures.</p>
            <p>What better way to transform a passion into your profession. I think my experiences as a LEGO creator have been a great jumping board for diving into the study of Industrial Design and I am glad these skills have been proven useful during my bachelor’s.</p>
        </div>
      </section>

      <section className="lego-grid">
        {legoContent.map((project) => (
          <div key={project.id} className="project-card lego-card">
            {/* De wrapper krijgt een extra class als er meerdere items zijn */}
            <div className={`card-media-grid ${renderMedia(project).length > 1 ? 'multi-media' : ''}`}>
              {renderMedia(project)}
            </div>
            
            <div className="card-info">
              <span className="card-meta">{project.year}</span>
              <h3 className="card-title">{project.title}</h3>
              <p className="card-brief">{project.description}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Lego;