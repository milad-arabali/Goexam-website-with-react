import React, { Component } from 'react';
import styles from "./navbar.module.css";
import logo from "../images/logo.png"

export default class navbar extends Component {
  render() {
    return (
      
        <header className={styles.header}>
        <div className={styles.listcontainer}>
            <ul className={styles.list}>
                <li>Home</li>
                <li>product</li>
                <li>About us</li>
            </ul>
        </div>
        <div className={styles.logo}>
            <img className ={styles.logo} src={logo}/>
        </div>
      </header>
    )
  }
}
