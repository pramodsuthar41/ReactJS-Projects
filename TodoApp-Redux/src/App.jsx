import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo } from "./slice/todoSlice";
import { v4 as uuid } from "uuid";

function App() {
  const [inputText, setInputText] = useState("");

  const dispatch = useDispatch();

  const { todos } = useSelector((state) => state.todos);

  const onAddClick = () => {
    if (!inputText.trim()) return;

    dispatch(
      addTodo({
        id: uuid(),
        todo: inputText,
      }),
    );

    setInputText("");
  };

  const OnDeleteClick = (id) => {
    dispatch(
      deleteTodo({
        id: id,
      }),
    );
  };

  return (
    <div className="bg-slate-200 w-screen h-screen">
      <h1 className="text-center pt-5 text-2xl font-bold">Todo App</h1>

      <div className="flex justify-center mt-5">
        <input
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          className="bg-white border px-3 py-2"
          type="text"
          placeholder="Enter your task..."
        />

        <button
          onClick={onAddClick}
          className="bg-blue-500 text-white px-4 py-2"
        >
          Add
        </button>
      </div>

      <div className="mt-5">
        {todos?.length > 0 &&
          todos.map((todo) => {
            return (
              <div key={todo.id} className="flex justify-center gap-4 mt-2">
                <span>{todo.todo}</span>

                <button
                  onClick={() => OnDeleteClick(todo.id)}
                  className="bg-red-500 text-white px-3"
                >
                  Delete
                </button>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default App;
