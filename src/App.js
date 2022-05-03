import { useEffect, useState } from "react";
import "./styles.css";
import TodoList from "./TodoList";
export default function App() {
  const [todo, setTodo] = useState("");
  const [todos, settodos] = useState([]);
  const [todoEditing, setTodoEditing] = useState(null);
  const [editingText, setEditingText] = useState("");

  useEffect(() => {
    const temp = localStorage.getItem("todos");
    const loadedtodo = JSON.parse(temp);
    if (loadedtodo) {
      settodos(loadedtodo);
    }
  }, []);
  useEffect(() => {
    const temp = JSON.stringify(todos);
    localStorage.setItem("todos", temp);
  }, [todos]);

  function handelSubmit(e) {
    e.preventDefault();

    const newTodo = {
      id: new Date().getTime(),
      text: todo,
      complete: false
    };
    settodos([...todos].concat(newTodo));
    setTodo("");
  }
  function deleteTodo(id) {
    const updatedTodo = [...todos].filter((todo) => todo.id !== id);
    settodos(updatedTodo);
  }
  function toggleComplete(id) {
    const updatedTodos = [...todos].map((todo) => {
      if (todo.id === id) {
        todo.complete = !todo.complete;
      }
      return todo;
    });
    settodos(updatedTodos);
  }
  function editTodo(id) {
    const updatedTodos = [...todos].map((todo) => {
      if (todo.id === id) {
        todo.text = editingText;
      }
      return todo;
    });
    settodos(updatedTodos);
    setTodoEditing(null);
    setEditingText("");
  }

  return (
    <div className="App">
      <form onSubmit={handelSubmit}>
        <input
          type="text"
          value={todo}
          onChange={(e) => {
            setTodo(e.target.value);
          }}
        />
        <input type="submit" value="submit" />
      </form>
      <TodoList
        todo={todo}
        todos={todos}
        todoEditing={todoEditing}
        setEditingText={setEditingText}
        setTodoEditing={setTodoEditing}
        editingText={editingText}
        editTodo={editTodo}
        deleteTodo={deleteTodo}
        toggleComplete={toggleComplete}
      />
    </div>
  );
}
