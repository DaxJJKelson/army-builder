import { createBrowserRouter } from "react-router-dom";

import App from "./App";

import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import PortfolioDetails from "./pages/PortfolioDetails";
import Contact from "./pages/Contact";
import ErrorPage from "./pages/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "portfolio", element: <Portfolio /> },
      { path: "portfolio/:id", element: <PortfolioDetails /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]);
