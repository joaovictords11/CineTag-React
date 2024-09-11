import React from "react";
import styles from "./CabecalhoLink.module.css";
import { NavLink } from "react-router-dom";

const CabecalhoLink = ({ url, children }) => {
  return (
    <NavLink
      to={url}
      className={({ isActive }) => (isActive ? styles.activeLink : styles.link)}
    >
      {children}
    </NavLink>
  );
};

export default CabecalhoLink;
