import { useState } from "react";
import { v4 as uuid } from "uuid";
import "./index.css";
function App() {
  const [todo, setTodo] = useState();
  const [todoList, setTodoList] = useState([]);

  const onTodoInputChange = (e) => {
    setTodo(e.target.value);
  };

  const onTodoAddClick = () => {
    setTodoList([...todoList, { id: uuid(), todo: todo, isCompleted: false }]);
    setTodo("");
  };

  const onDeleteClick = (id) => {
    const updatedTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(updatedTodoList);
  };

  const onTodoCheckChange = (id) => {
    const updatedTodoList = todoList.map((todo) =>
      todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo,
    );
    setTodoList(updatedTodoList);
    console.log(updatedTodoList);
  };

  return (
    <>
      <div className="App">
        <div>
          <input
            value={todo}
            onChange={onTodoInputChange}
            type="text"
            placeholder="Add your task..."
          />
          <button onClick={onTodoAddClick}>Add</button>
        </div>
        <div>
          {todoList?.length > 0 &&
            todoList.map((todo) => (
              <div>
                <label>
                  <input
                    onChange={() => onTodoCheckChange(todo.id)}
                    type="checkbox"
                  />
                  <span className={todo.isCompleted ? "strike-through" : ""}>
                    {todo.todo}
                  </span>
                </label>
                <button onClick={() => onDeleteClick(todo.id)}>Delete</button>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default App;
