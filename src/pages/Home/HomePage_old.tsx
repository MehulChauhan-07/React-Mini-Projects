import React from "react";
import { Link } from "react-router-dom";

interface Project {
  name: string;
  path: string;
}

interface HomeProps {
  projects: Project[];
}

const HomePage: React.FC<HomeProps> = ({ projects = [] }) => {
  return (
    <div className="max-w-3xl mx-auto p-5 shadow-lg rounded-lg mt-10">
      <h1 className="text-center text-3xl mb-2">My Projects</h1>
      {projects.length > 0 ? (
        <ol className="list-none p-0 grid place-items-center">
          {projects.map((project: Project) => (
            <li key={project.path} className="my-2">
              <Link
                to={project.path}
                className="text-xl text-blue-600 font-medium transition-colors duration-500 hover:text-blue-800 hover:underline"
              >
                {project.name}
              </Link>
            </li>
          ))}
        </ol>
      ) : (
        <p>No projects available.</p>
      )}
    </div>
  );
};

export default HomePage;
