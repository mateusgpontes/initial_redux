const INITIAL_STATE = [];

const todos = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          id: Math.random(),
          text: action.text
        }
      ];
    default:
      return state;
  }
};

export default todos;
