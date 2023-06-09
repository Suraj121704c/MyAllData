import React from "react";
import styles from "./button.module.css";

const Button = ({ children, color, size }) => {
  return (
    <div>
      <button
        data-testId="custom-button"
        className={`${styles[color]} ${styles[size]}`}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
