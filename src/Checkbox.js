function Checkbox({ toggleComplete, todo }) {
  return (
    <div>
      <input
        type="checkbox"
        onChange={() => toggleComplete(todo.id)}
        checked={todo.complete}
      />
    </div>
  );
}

export default Checkbox;
