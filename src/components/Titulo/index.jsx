import styles from "./Titulo.module.css";

import React from "react";

const Titulo = ({ children }) => {
  return <div className={styles.texto}>{children}</div>;
};

export default Titulo;
