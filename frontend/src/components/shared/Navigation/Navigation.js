import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";
const Navigation = () => {
  const brandStyle = {
    color: "#fff",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "22px",
    display: "flex",
    alignItems: "center",
  };

  const logoText = {
    marginLeft: "10px",
  };
  return (
    <nav className={`${styles.navbar} container`}>
      <Link style={brandStyle} to="/">
        <img src="/images/logo.png" alt="logo" />
        <span style={logoText}>Codershouse</span>
      </Link>

      <div className={styles.navRight}>
        <h3>Romit</h3>
        <Link to="/">
          <img
            className={styles.avatar}
            src="/images/monkey-avatar.png"
            width="40"
            height="40"
            alt="avatar"
          />
        </Link>
        <button className={styles.logoutButton}>
          <img src="/images/logout.png" alt="logout" />
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
