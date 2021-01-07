import React from 'react';
import styles from  './styles.module.css';
import Applogo from '../../assets/logo.png';
import { Link } from 'react-router-dom';



const Footer = () => {
  return (
      <div className={styles.containers}>
            <div className={styles.grid}>
            <div className={styles.card}>
              <img src={Applogo}  alt="Logo"/>
            {/* <h1>Luxury Residences</h1> */}
            <p>..................................</p>
            </div>

            <div className={styles.card}>
          <h1>Contact</h1>
          <ul>
              <li>+234 ************</li>
              <li>contact@teebalo.co.uk</li>
          </ul>
            </div>

            <div className={styles.card}>
            <h1>CATALOG</h1>
            <ul>
              <li><a href="/">Makeup Kits</a></li>
              <li><a href="/">Shirts</a></li>
              <li><a href="/">Blouse</a></li>
          </ul>
            </div>

            
            <div className={styles.card}>
            <h1>Quick Links</h1>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/catalog">Catalog</Link></li>
              <li><Link to="/shop">Shop Collections</Link></li>
          </ul>
            </div>
    </div>
    <hr />
    <p>Copyright &copy; 2020 All Rights Reserved Teebalo</p>
    </div>
  );
}
export default Footer;