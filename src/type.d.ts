interface ToDo {
  id: number;
  todoMessage: string;
}

type ToDoState = {
  messages: ToDo[];
};

type ToDoAction = {
  type: string;
  messages: ToDo;
};

type DispatchType = (args: ToDoAction) => ToDoAction;
