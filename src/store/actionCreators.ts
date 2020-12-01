import * as actionTypes from "./actionTypes";

export function addTODO(messages: ToDo) {
  const action: ToDoAction = {
    type: actionTypes.ADD_TODO,
    messages,
  };

  return simulateHttpRequest(action);
}

export function removeTODO(messages: ToDo) {
  const action: ToDoAction = {
    type: actionTypes.REMOVE_TODO,
    messages
  };
  return simulateHttpRequest(action);
}

export function updateTODO(messages: ToDo) {
  const action: ToDoAction = {
    type: actionTypes.UPDATE_TODO,
    messages
  };
  return simulateHttpRequest(action);
}

export function simulateHttpRequest(action: ToDoAction) {
  return (dispatch: DispatchType) => {
    setTimeout(() => {
      dispatch(action);
    }, 500);
  };
}
