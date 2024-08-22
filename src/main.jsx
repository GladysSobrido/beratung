import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RootLayout } from "./RootLayout";
//import App from './App.jsx'
import "../global.css";
import { Home } from "./pages/Home";
import { Leistungen } from "./pages/Leistungen";
import { Unternehme } from "./pages/Unternehme";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "leistungen",
        element: <Leistungen />,
      },
      {
        path: "Unternehme",
        element: <Unternehme />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
