import Link from "next/link";
import { useState } from "react";

import styles from "./componentStyles/NavBar.module.css";

const NavBar = () => {
  const [user, setUser] = useState(null);
  const [userName, setUserName] = useState(null);

  return (
    <nav className={styles.nav_container}>
      <ul>
        <li>
          <Link href="/">
            <button>FEED</button>
          </Link>
        </li>
        {/* User is not signed-in and has username we show this button or not */}

        {userName && (
          <>
            <li>
              <Link href="/admin">
                <button>Write Posts</button>
              </Link>
            </li>

            <li>
              <Link href={`/${userName}`}>
                <img
                  src={
                    user /* ?.photoURL 'commented this out because the user is not yet authenticated to avoid errors' */
                  }
                />
              </Link>
            </li>
          </>
        )}

        {/* user is not signed or has not created a username */}
        {!userName && (
          <li>
            <Link href="/enter">
              <button>Log In</button>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default NavBar;
