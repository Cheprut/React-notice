import sn from "classnames";
import styles from "./input.module.css";

function Input({ className, ref, isValid = false, ...props }) {
  return (
    <input
      ref={ref}
      className={sn(styles["input"], styles[className], {
        [styles["invalid"]]: isValid,
      })}
      {...props}
    />
  );
}

export default Input;
