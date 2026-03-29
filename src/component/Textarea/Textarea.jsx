import sn from "classnames";
import styles from "./Textarea.module.css";

function Textarea({ className, ref, isValid = false, ...props }) {
  return (
    <textarea
      ref={ref}
      className={sn(styles["input"], styles[className], {
        [styles["invalid"]]: isValid,
      })}
      {...props}
    ></textarea>
  );
}

export default Textarea;
