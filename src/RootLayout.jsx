import { Outlet } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
//Authentication with Clerk imports:
import { ClerkProvider } from "@clerk/clerk-react";
//Imports for the private routing for clerck authenticated users:
import { useNavigate } from "react-router-dom";

// Authentication with clerk Import your publishable key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
// "pk_test_ZGVmaW5pdGUtc2hlcGhlcmQtNTEuY2xlcmsuYWNjb3VudHMuZGV2JA";

//

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable KeyTEST");
}
//Importing the library Chrakra UI
import { ChakraProvider } from "@chakra-ui/react";
export function RootLayout() {
  const navigate = useNavigate();
  return (
    <>
      <ClerkProvider
        routerPush={(to) => navigate(to)}
        routerReplace={(to) => navigate(to, { replace: true })}
        publishableKey={PUBLISHABLE_KEY}
        afterSignOutUrl="/"
      >
        <ChakraProvider>
          <NavBar />
          <Outlet />
          <footer>
            <Footer />
          </footer>
        </ChakraProvider>
      </ClerkProvider>
    </>
  );
}
