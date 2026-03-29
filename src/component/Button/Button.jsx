import styles from "./Button.module.css";

function Button({ className, children, ...props }) {
  const btnClass = `${styles.btn} ${className ? styles[className] : ""}`;

  return (
    <button className={btnClass} {...props}>
      {children}
    </button>
  );
}

export default Button;
