import Input from "../Input/Input";
import styles from "./Form.module.css";
import Button from "../Button/Button";
import Textarea from "../Textarea/Textarea";
import { use, useEffect, useReducer, useRef } from "react";
import { INITIAL_STATE, formReducer } from "./Form.state";

function Form({ addnotesstorage, data, onDelete }) {
  const [formState, dispatchForm] = useReducer(formReducer, INITIAL_STATE);
  const titleRef = useRef();
  const dateRef = useRef();
  const textRef = useRef();
  const { values, isValid, isFormReadyToSubmit } = formState;

  const addnotes = (even) => {
    dispatchForm({
      type: "SUBMIT",
    });
  };

  useEffect(() => {
    if (data) {
      dispatchForm({
        type: "SET_VALUE",
        payload: data,
      });
    }
  }, [data]);

  useEffect(() => {
    if (isFormReadyToSubmit) {
      addnotesstorage(values);
      dispatchForm({
        type: "CLEAR_FORM",
      });
    }
  }, [isFormReadyToSubmit, addnotesstorage, values]);

  const focusError = (isValid) => {
    switch (true) {
      case !isValid.title:
        titleRef.current.focus();
        break;
      case !isValid.date:
        dateRef.current.focus();
        break;
      case !isValid.text:
        textRef.current.focus();
        break;
    }
  };

  useEffect(() => {
    let timerId;
    if (!isValid.title || !isValid.text || !isValid.date) {
      focusError(isValid);
      timerId = setTimeout(() => {
        dispatchForm({
          type: "RESET_VALIDITY",
        });
      }, 2000);
    }
    return () => {
      clearTimeout(timerId);
    };
  }, [isValid]);

  const onChange = (event) => {
    dispatchForm({
      type: "SET_VALUE",
      payload: {
        [event.target.name]: event.target.value,
      },
    });
  };
  function handleOpenModal() {
    alert("Подтвердите сохранение");
  }
  return (
    <form className={styles["input"]} action={addnotes}>
      <div className={styles["form-row"]}>
        <Input
          className="input-title"
          value={values.title}
          onChange={onChange}
          ref={titleRef}
          isValid={!isValid.title}
          type="text"
          name="title"
          placeholder="input-title"
        />

        <Button
          type="button"
          className="delete"
          onClick={() => onDelete(data.id)}
        >
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.4">
              <rect
                x="0.5"
                y="0.5"
                width="29"
                height="29"
                rx="14.5"
                stroke="white"
              />
              <path
                d="M21.6667 8.33334H8.33335C7.41288 8.33334 6.66669 9.07954 6.66669 10V10.8333C6.66669 11.7538 7.41288 12.5 8.33335 12.5H21.6667C22.5872 12.5 23.3334 11.7538 23.3334 10.8333V10C23.3334 9.07954 22.5872 8.33334 21.6667 8.33334Z"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8.33331 12.5V20C8.33331 20.442 8.50891 20.866 8.82147 21.1785C9.13403 21.4911 9.55795 21.6667 9.99998 21.6667H20C20.442 21.6667 20.8659 21.4911 21.1785 21.1785C21.4911 20.866 21.6666 20.442 21.6666 20V12.5"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M13.3333 15.8333H16.6666"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </svg>
        </Button>
      </div>
      <div className={styles["form-row"]}>
        <label className={styles["form-lable"]} htmlFor="data">
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.6">
              <path
                d="M14.25 3H3.75C2.92157 3 2.25 3.67157 2.25 4.5V15C2.25 15.8284 2.92157 16.5 3.75 16.5H14.25C15.0784 16.5 15.75 15.8284 15.75 15V4.5C15.75 3.67157 15.0784 3 14.25 3Z"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 1.5V4.5"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6 1.5V4.5"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2.25 7.5H15.75"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6 10.5H6.00833"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9 10.5H9.00833"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 10.5H12.0083"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6 13.5H6.00833"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9 13.5H9.00833"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 13.5H12.0083"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </svg>

          <span>Дата</span>
        </label>
        <Input
          type="date"
          id="date"
          ref={dateRef}
          isValid={!isValid.date}
          name="date"
          onChange={onChange}
          value={values.date}
        />
      </div>
      <div className={styles["form-row"]}>
        <label className={styles["form-lable"]} htmlFor="data">
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.6">
              <path
                d="M3 15H15C15.3978 15 15.7794 14.842 16.0607 14.5607C16.342 14.2794 16.5 13.8978 16.5 13.5V6C16.5 5.60218 16.342 5.22064 16.0607 4.93934C15.7794 4.65804 15.3978 4.5 15 4.5H9.0525C8.80544 4.49872 8.56252 4.43644 8.34532 4.31868C8.12813 4.20092 7.94338 4.03134 7.8075 3.825L7.1925 2.925C7.05662 2.71866 6.87187 2.54908 6.65468 2.43132C6.43748 2.31356 6.19456 2.25128 5.9475 2.25H3C2.60218 2.25 2.22064 2.40804 1.93934 2.68934C1.65804 2.97064 1.5 3.35218 1.5 3.75V13.5C1.5 14.325 2.175 15 3 15Z"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </svg>

          <span>Метки</span>
        </label>
        <Input isValid={false} type="text" name="tag" onChange={onChange} />
      </div>
      <div>
        <Textarea
          name="text"
          ref={textRef}
          onChange={onChange}
          isValid={!isValid.text}
          value={values.text}
        />
      </div>
      <Button type="submit" className="btn-blue">
        Сохранить
      </Button>
    </form>
  );
}

export default Form;
