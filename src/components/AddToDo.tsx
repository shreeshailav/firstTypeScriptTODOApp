import * as React from "react";

type Props = {
  saveMessage: (messages: ToDo | any) => void;
  defaultValue: any;
  editValue: (val:any) => void;
};

export const AddToDo: React.FC<Props> = ({ saveMessage, defaultValue, editValue }) => {
  const [messages, setMessage] = React.useState<ToDo | {}>();

  const handleMessageData = (e: React.FormEvent<HTMLInputElement>) => {
    editValue(e.currentTarget.value)
    setMessage({
      ...messages,
      [e.currentTarget.id]: e.currentTarget.value,
    });
  };

  const addNewMessage = (e: React.FormEvent) => {
    e.preventDefault();

    saveMessage({todoMessage:defaultValue});
  };
 

  return (
    <form onSubmit={addNewMessage} className="Add-message">
      <div className="Div-Input">
        <span>
          <h1>My Todos</h1>
          <input
            type="text"
            id="messageText"
            placeholder="todo"
            onChange={handleMessageData}
            value={defaultValue}
          />
          <button disabled={messages === undefined ? true : false}>Save</button>
        </span>
      </div>
    </form>
  );
};
