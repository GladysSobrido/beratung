import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RootLayout } from "./RootLayout";
//import App from './App.jsx'
import "../global.css";
import { Home } from "./pages/Home";
import { Leistungen } from "./pages/Leistungen";
import { Unternehme } from "./pages/Unternehme";
import { Kontakt } from "./pages/Kontakt";
//Authentication with Clerk imports:
import { ClerkProvider } from "@clerk/clerk-react";

// Authentication with clerk Import your publishable key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

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
      {
        path: "kontakt",
        element: <Kontakt />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <RouterProvider router={router} />
    </ClerkProvider>
  </StrictMode>
);
