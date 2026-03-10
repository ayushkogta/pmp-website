import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./components/Home";
import { People } from "./components/People";
import { Projects } from "./components/Projects";
import { Apply } from "./components/Apply";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "people", Component: People },
      { path: "projects", Component: Projects },
      { path: "apply", Component: Apply },
    ],
  },
]);