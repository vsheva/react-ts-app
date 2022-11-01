class Todo {
  text: string;
  id: string;

  constructor(todoText: string) {
    this.text = todoText;
    this.id = new Date().toISOString();
  }
}

export default Todo;

//const todos = [new Todo('Learn React'), new Todo('Learn TS')];
