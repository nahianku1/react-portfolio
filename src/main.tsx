import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import Home from "./components/layouts/Home/Home.tsx";
import Skills from "./components/layouts/Skills/Skills.tsx";
import Projects from "./components/layouts/Projects/Projects.tsx";
import Contact from "./components/layouts/Contact/Contact.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/skills",
        element: <Skills />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
