import { Toaster } from "react-hot-toast";
import NavBar from "../components/NavBar";
import { UserContext } from "../lib/globalContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <UserContext.Provider value={{user: {}, userName: 'chenwi'}}>
      
      <NavBar />
      <Component {...pageProps} />

      {/* We can trigger this Toast component in any of our coponents */}
      <Toaster/>
    </UserContext.Provider>
  );
}

export default MyApp;
