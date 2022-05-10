import { signInWithPopup } from "firebase/auth";
import { auth, googleAuthenticationProvider } from "../lib/firebase";

import styles from "./styles/enter.module.css";

const enter = (props) => {
  const user = null;

  const userName = null;

  return (
    <div className={styles.enter_container}>
      {user ? 
        !userName ? 
          <userNameForm />
         : 
          <signOutButton />
        
       : 
        <signInButton />
      }
    </div>
  );
};

// Sign In with Google button

function signInButton() {
  const signInWithGoogle = async () => {
    await signInWithPopup(/* auth */ googleAuthenticationProvider);
  };
 
  return (
      <button onClick={signInWithGoogle}>Sign in with google</button>
  );
}

// Sign Out button
function signOutButton() {
  return <button onClick={auth.signOut()}>Sign Out</button>;
}

// Sign in with Google button
export const userNameForm = () => {};

export default enter;
