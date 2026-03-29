import React from "react";
import Button from "../Button/Button";
import styles from "./Noticelist.module.css";
import Notice from "../Notice/Notice";

function Noticelist({ notes, setItem }) {
  const sortnotes = (a, b) => {
    if (a.date < b.date) return 1;
    else {
      return -1;
    }
  };
  const filterrednotice = [...notes].sort(sortnotes);
  return (
    <div className={styles["journal-list"]}>
      {filterrednotice.map((note) => (
        <Button
          onClick={() => setItem(note)}
          className="notice-btn"
          key={note.id}
        >
          <Notice {...note} />
        </Button>
      ))}
    </div>
  );
}

export default Noticelist;
