function Delete({ deleteTodo, todo }) {
  return (
    <div>
      <button onClick={() => deleteTodo(todo.id)}>delete</button>
    </div>
  );
}

export default Delete;
