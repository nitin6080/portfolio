import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import ProjectsPage from "../pages/projectsPage";
import LiveProjects from "../components/sections/liveProjects";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/projects",
    element: <ProjectsPage />,
  },
  {
    path: "/live-projects",
    element: <LiveProjects />,
  },
]);
