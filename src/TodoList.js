import Edit from "./Edit";
import Delete from "./Delete";
import Checkbox from "./Checkbox";

function TodoList({
  toggleComplete,
  deleteTodo,
  todoEditing,
  todo,
  todos,
  setEditingText,
  editingText,
  editTodo,
  setTodoEditing
}) {
  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>
          {todoEditing == todo.id ? (
            <input
              type="text"
              onChange={(e) => setEditingText(e.target.value)}
              value={editingText}
            />
          ) : (
            <div>{todo.text}</div>
          )}

          <Delete deleteTodo={deleteTodo} todo={todo} />
          <Checkbox toggleComplete={toggleComplete} todo={todo} />
          <Edit
            todoEditing={todoEditing}
            todo={todo}
            editTodo={editTodo}
            setTodoEditing={setTodoEditing}
          />
        </div>
      ))}
    </div>
  );
}

export default TodoList;
