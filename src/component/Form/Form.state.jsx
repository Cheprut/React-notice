export const INITIAL_STATE = {
  isValid: {
    // валидна ли форма, изначально форма валидна, так как ничего не введено
    title: true,
    text: true,
    date: true,
  },
  values: {
    // тоесть если значения не заданы - форма валидна
    title: "",
    text: "",
    date: "",
    tag: "",
  },
  // готова ли форма к сабмиту
  isFormReadyToSubmit: false,
};

export function formReducer(state, action) {
  console.log(action);

  switch (
    action.type // будем проверять тип
  ) {
    case "CLEAR_FORM": {
      return INITIAL_STATE;
    }
    case "RESET_VALIDITY": {
      return {
        ...state,
        isValid: INITIAL_STATE.isValid,
      };
    }
    case "SUBMIT": {
      const titleValid = state.values.title.trim().length;
      const textValid = state.values.text.trim().length;
      const dataValid = state.values.date;
      return {
        ...state,
        isValid: {
          title: titleValid,
          text: textValid,
          date: dataValid,
        },
        isFormReadyToSubmit: titleValid && textValid && textValid,
      };
    }
    case "SET_VALUE": {
      return {
        ...state,
        values: {
          ...state.values,
          ...action.payload,
        },
      };
    }
    case "SET_FORM":
  }
}
