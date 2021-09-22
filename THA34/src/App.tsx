import Todo from "./components/Todo";
import Todoclass from "./models/todo";

const todos = [new Todoclass("Learn react"), new Todoclass("Learn Typescript")];
function App() {
  return (
    <>
      <Todo items={todos} />
    </>
  );
}

export default App;
