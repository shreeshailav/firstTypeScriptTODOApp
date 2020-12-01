import * as actionTypes from "./actionTypes";

const initialState: ToDoState = {
  messages: [
    {
      id: 1,
      todoMessage: "Eat Breakast",
    },
    {
      id: 2,
      todoMessage: "Finish Course",
    },
  ],
};

const reducer = (
  state: ToDoState = initialState,
  action: ToDoAction
): ToDoState => {
  switch (action.type) {
    case actionTypes.ADD_TODO:
      const newMessage: ToDo = {
        id: Math.random(),
        todoMessage: action.messages.todoMessage,
      };
      return {
        ...state,
        messages: state.messages.concat(newMessage),
      };

    case actionTypes.REMOVE_TODO:
      const updatedMessages: ToDo[] = state.messages.filter(
        (messages) => messages.id !== action.messages.id
      );
      return {
        ...state,
        messages: updatedMessages,
      };

      // not using now
    case actionTypes.UPDATE_TODO:
      const todoMessage: ToDo[] = state.messages.filter(
        (messages) => messages.id === action.messages.id
      );
      return {
        ...state,
        // messages: updatedMessages,
      };
  }
  return state;
};

export default reducer;
