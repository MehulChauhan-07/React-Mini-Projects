import { Link } from "react-router-dom";
import { FaPlus, FaGamepad, FaListUl, FaServer } from "react-icons/fa";
// import "@styles/globals.css";
const projects = [
  {
    id: "counter",
    title: "Counter App",
    description:
      "A simple counter application with increment/decrement functionality.",
    icon: <FaPlus className="text-blue-500" size={24} />,
    link: "/counter",
    technologies: ["React", "TypeScript", "Zustand"],
  },
  {
    id: "todo",
    title: "Todo App",
    description: "Task management application with CRUD operations.",
    icon: <FaListUl className="text-green-500" size={24} />,
    link: "/todo",
    technologies: ["React", "TypeScript", "LocalStorage"],
  },
  {
    id: "tictactoe",
    title: "Tic Tac Toe",
    description: "Classic two-player game implementation with win detection.",
    icon: <FaGamepad className="text-purple-500" size={24} />,
    link: "/tictactoe",
    technologies: ["React", "TypeScript", "State Management"],
  },
  {
    id: "api",
    title: "API Explorer",
    description: "Application demonstrating data fetching from external APIs.",
    icon: <FaServer className="text-orange-500" size={24} />,
    link: "/api_explorer",
    technologies: ["React", "TypeScript", "Axios", "React Query"],
  },
];

const HomePage = () => {
  return (
    <div className="py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">React Mini Projects</h1>
        <p className="text-xl max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
          A collection of small React applications built with TypeScript,
          showcasing different concepts, patterns, and libraries.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {projects.map((project) => (
          <Link
            to={project.link}
            key={project.id}
            className="bg-white dark:bg-slate-800 rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 flex flex-col"
          >
            <div className="flex items-center justify-center h-16 w-16 bg-gray-100 dark:bg-slate-700 rounded-full mb-4 mx-auto">
              {project.icon}
            </div>
            <h2 className="text-xl font-semibold text-center mb-2">
              {project.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-center flex-grow">
              {project.description}
            </p>
            <div className="mt-4 flex flex-wrap justify-center gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 bg-gray-100 dark:bg-slate-700 text-xs rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
