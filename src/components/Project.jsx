import React from 'react';

function Project({ title, image, appLink, repoLink }) {
  return (
    <div className="project">
      <h3>{title}</h3>
      <img src={image} alt={title} className="project-image" />

      <div>
        <a href={appLink}>Live Demo</a>
        <a href={repoLink}>GitHub Repo</a>
      </div>
    </div>
  );
}

export default Project;


