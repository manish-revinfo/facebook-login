import React, { useState } from "react";
import styles from "@/styles/Login.module.css";
import SignUpForm from "./SignUpForm";
import Link from "next/link";
const Auth = () => {
  const [user, setUser] = useState(null);
  return (
    <div className={styles.authContainer}>
      <div className={styles.authInnerContainer}>
        <div className="signInContainer">
          <div className={styles.signInForm}>
            <h1 className={styles.signInTitle}>Sign Up</h1>
            <SignUpForm/>
          </div>

          <hr className={styles.signInSeparator} />

          <div className={styles.signInWithSocials}>
            <span
              className={styles.textSmall}
              style={{ color: "#000", padding: "0 0 20px" }}
            >
              Sign Up via
            </span>
            <div className={styles.socials}>
              <button className={styles.socialButtons}>Google</button>
              <button className={styles.socialButtons}>Facebook</button>
              <button className={styles.socialButtons}>Apple</button>
            </div>
          </div>

          <div className={styles.signInFooter}>
            <Link href="">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
