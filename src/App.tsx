import React, { useState } from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import "./styles.css";

import { Messages } from "./components/Messages";
import { AddToDo } from "./components/AddToDo";
import { addTODO, removeTODO, updateTODO } from "./store/actionCreators";
import { Dispatch } from "redux";

const App: React.FC = () => {
  const messages: readonly ToDo[] = useSelector(
    (state: ToDoState) => state.messages,
    shallowEqual
  );
  const [defaultVal, setDefaultVal] = useState("");

  const dispatch: Dispatch<any> = useDispatch();


  const saveMessage = React.useCallback(
    (message: ToDo) => dispatch(addTODO(message)),
    [dispatch]
  );
 
  const editValue = (val:any) => {
    setDefaultVal(val)
  };

  return (
    <main>
      {saveMessage && (
        <AddToDo saveMessage={saveMessage} defaultValue={defaultVal} editValue={editValue}/>
      )}
      {messages.map((message: ToDo) => (
        <Messages
          key={message.id}
          messages={message}
          removeMessage={removeTODO}
          updateTODO={updateTODO}
          editValue={editValue}
        />
      ))}
    </main>
  );
};

export default App;
