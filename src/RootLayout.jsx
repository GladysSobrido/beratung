import { Outlet } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";

export function RootLayout() {
  return (
    <>
      <header>
        <NavBar />
      </header>

      <Outlet />

      <footer>
        <Footer />
      </footer>
    </>
  );
}
