import React from 'react';
import { projectsContent } from '../../Data/Content';
import './ProjectOverview.css';

const Projects = () => {
  const graduation = projectsContent.filter(p => p.tier === 'graduation');
  const master = projectsContent.filter(p => p.tier === 'master');
  const extracurricular = projectsContent.filter(p => p.tier === 'extracurricular');
  const bachelor = projectsContent.filter(p => p.tier === 'bachelor');
  const archive = projectsContent.filter(p => p.tier === 'archive');

  const ProjectCard = ({ project, size }) => (
    <div className={`project-card ${size}`}>
      <div className="card-image-wrapper">
        <img 
          src={`${process.env.PUBLIC_URL}${project.image}`} 
          alt={project.title} 
        />
      </div>
      <div className="card-info">
        <span className="card-meta">{project.meta}</span>
        <h3 className="card-title">{project.title}</h3>
        {project.brief && <p className="card-brief">{project.brief}</p>}
      </div>
    </div>
  );

  return (
    <div className="projects-container">
      {/* GRADUATION */}
      <section className="project-tier">
        <h2>See my graduation work</h2>
        <div className="tier-divider" />
        <div className="grid-large">
          {graduation.map(p => <ProjectCard key={p.id} project={p} size="large" />)}
        </div>
      </section>

      {/* MASTER & EXTRACURRICULAR */}
      <section className="project-tier">
        <h2>Relevant master projects</h2>
        <div className="tier-divider" />
        <div className="grid-medium">
          {master.map(p => <ProjectCard key={p.id} project={p} size="medium" />)}
        </div>
      </section>

      <section className="project-tier extracurricular-section">
  <h2>Extracurricular Activities</h2>
  <div className="tier-divider" />
  <div className="grid-extracurricular">
    {extracurricular.map(p => (
      <ProjectCard key={p.id} project={p} size="extracurricular" />
    ))}
  </div>
</section>

 {/* ARCHIVE / MASONRY GALLERY */}
<section className="archive-section">
  <h2>Overview of various projects and explorations throughout my academic journey</h2>
  <div className="tier-divider" />
  
  <div className="masonry-grid">
    {archive.map((p) => (
      <div key={p.id} className="archive-item">
        <img 
          src={`${process.env.PUBLIC_URL}${p.image}`} 
          alt="Exploration" 
          loading="lazy" 
        />
      </div>
    ))}
  </div>
</section>
    </div>
  );
};

export default Projects;