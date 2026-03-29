import React from "react";
import styles from "./Leftpanel.module.css";

function Leftpanel({ children }) {
  return <div className={styles["left-panel"]}>{children}</div>;
}

export default Leftpanel;
