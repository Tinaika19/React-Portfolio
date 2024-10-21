import Project from '../components/Project';

const Portfolio = () => (
  <section>
    <h2>My Projects</h2>
    <div className="projects">
      <Project
        title="Project 1"
        image="image-url"
        deployedLink="https://deployed-app-link.com"
        githubLink="https://github.com/your-username/project1"
      />
      {/* Add more projects */}
    </div>
  </section>
);

export default Portfolio;
