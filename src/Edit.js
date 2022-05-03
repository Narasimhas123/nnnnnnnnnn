function Edit({ setTodoEditing, todo, todoEditing, editTodo }) {
  return (
    <div>
      {todoEditing === todo.id ? (
        <button onClick={() => editTodo(todo.id)}>save</button>
      ) : (
        <button onClick={() => setTodoEditing(todo.id)}>edit</button>
      )}
    </div>
  );
}

export default Edit;
