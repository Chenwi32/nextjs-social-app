import { Toaster } from "react-hot-toast";
import NavBar from "../components/NavBar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />

      {/* We can trigger this Toast component in any of our coponents */}
      <Toaster/>
    </>
  );
}

export default MyApp;
