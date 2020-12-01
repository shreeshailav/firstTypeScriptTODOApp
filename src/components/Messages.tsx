import * as React from "react";
import { Dispatch } from "redux";
import { useDispatch } from "react-redux";
import deleteIcon from './../images/delete.png';
import editIcon from './../images/pencil.png';

type Props = {
  messages: ToDo;
  removeMessage: (messages: ToDo) => void;
  updateTODO: (messages: ToDo) => void;
  editValue : (val : any) => void;
};

export const Messages: React.FC<Props> = ({ messages, removeMessage, updateTODO, editValue }) => {
  const dispatch: Dispatch<any> = useDispatch();

  const chabgeMessgae = React.useCallback(
    (messages: ToDo) => dispatch(removeMessage(messages)),
    [dispatch, removeMessage] // for now I am removing todo from list and showing in edit box 
  );

  const deleteMessage = React.useCallback(
    (messages: ToDo) => dispatch(removeMessage(messages)),
    [dispatch, removeMessage]
  );
  return (
    <div className="Message">
      <div>
        <h1>{messages.todoMessage}</h1>
      </div>
      <img src={editIcon} className="Icon-delete" alt="logo" onClick={() => {chabgeMessgae(messages), editValue(messages.todoMessage)}}/>
      <img src={deleteIcon} className="Icon-delete" alt="logo" onClick={() => deleteMessage(messages)}/>
    </div>
  );
};
