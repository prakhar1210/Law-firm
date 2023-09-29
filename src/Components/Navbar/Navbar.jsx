import React from 'react';
import Vector from "../../Assets/Vector.svg";
import styles from '../Navbar/Navbar.module.css';

 const Navbar = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={Vector} alt="vector" />
        <div className={styles.compName}>IGSTUDIO</div>
      </div>
      <nav className={styles.navigation}>
        <ul>
          <li>Home</li>
          <li>Attorneys</li>
          <li>Practice Areas</li>
          <li>About Us</li>
        </ul>
      </nav>
      <button className={styles.button}>Contact Now</button>
    </header>
  )
};

export default Navbar;
