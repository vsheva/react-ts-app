import Todos from './components/Todos';
import NewTodo from './components/NewTodo';
import ContextProvider from './store/todo-context';

function App() {
  return (
    <ContextProvider>
      <NewTodo />
      <Todos />
    </ContextProvider>
  );
}

export default App;

//['Learn React', 'Learn TS']
