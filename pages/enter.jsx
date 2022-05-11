import { signInWithPopup } from "firebase/auth";
import { useContext } from "react";
import { auth, googleAuthenticationProvider } from "../lib/firebase";
import { UserContext } from "../lib/globalContext";

import styles from "./styles/enter.module.css";

const enter = (props) => {
  const {user, userName} = useContext(UserContext)

  return (
    <div className={styles.enter_container}>
      {user ? (
        !userName ? (
          <UserNameForm />
        ) : (
          <SignOutButton />
        )
      ) : (
        <SignInButton />
      )}
    </div>
  );
};

// Sign In with Google button

const SignInButton = () => {
  const signInWithGoogle = async () => {
    await signInWithPopup(auth, googleAuthenticationProvider);
  };

  return <button onClick={signInWithGoogle}><img className={styles.google_img} src='/google.jpeg' /> Sign in with google</button>;
};

// Sign Out button
const SignOutButton = () => {
  return <button onClick={auth.signOut()}>Sign Out</button>;
};

// Sign in with Google button
export const UserNameForm = () => {
  return (
    <>
      <p>User Name</p>
      <input type="text" placeholder="User Name" />
    </>
  );
};

export default enter;
