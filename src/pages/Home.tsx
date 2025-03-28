import React from "react";
import { Link } from "react-router-dom";
import "./style/Home.css";

interface Project {
  name: string;
  path: string;
}

interface HomeProps {
  projects: Project[];
}

const Home: React.FC<HomeProps> = ({ projects }) => {
  return (
    <div className="container">
      <h1>My Projects</h1>
      {projects.length > 0 ? (
        <ol>
          {projects.map((project: Project) => (
            <li key={project.path}>
              <Link to={project.path}>{project.name}</Link>
            </li>
          ))}
        </ol>
      ) : (
        <p>No projects available.</p>
      )}
    </div>
  );
};

export default Home;
