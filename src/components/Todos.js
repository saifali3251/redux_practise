import { fetchTodo, addTodo, updateTodo, deleteTodo } from "../actions/todoAction";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import './Todos.css'; // Importing custom CSS for styling

const Todos = () => {
  const { loading, todos, error } = useSelector((state) => state.todoHandler);
  const dispatch = useDispatch();
  
  const [newTodo, setNewTodo] = useState({
    id: 0, 
    title: "", 
    description: "", 
    priority: 1, 
    complete: true 
  });

  const fetchTodoHandler = () => {
    dispatch(fetchTodo());
  };

  const addTodoHandler = () => {
    dispatch(addTodo(newTodo));
    setNewTodo({ id: 0, title: "", description: "", priority: 1, complete: true });
  };

  const updateTodoHandler = () => {
    const updatedTodo = {
      title: newTodo.title,
      description: newTodo.description,
      priority: newTodo.priority,
      complete: newTodo.complete,
    };
    dispatch(updateTodo(newTodo.id, updatedTodo));
    setNewTodo({ id: 0, title: "", description: "", priority: 1, complete: true });
  };

  const deleteTodoHandler = (id) => {
    dispatch(deleteTodo(id));
  };

  const editTodoHandler = (todo) => {
    setNewTodo({
      id: todo.id,
      title: todo.title,
      description: todo.description,
      priority: todo.priority,
      complete: todo.complete,
    });
  };

  useEffect(() => {
    fetchTodoHandler();
  }, []);

  return (
    <div className="todo-container">
      <div className="form-section">
        <h2>{newTodo.id ? "Edit Todo" : "Add New Todo"}</h2>
        <input
          type="number"
          value={newTodo.id}
          onChange={(e) => setNewTodo({ ...newTodo, id: e.target.value })}
          placeholder="ID"
          disabled
        />
        <input
          type="text"
          value={newTodo.title}
          onChange={(e) => setNewTodo({ ...newTodo, title: e.target.value })}
          placeholder="Title"
        />
        <input
          type="text"
          value={newTodo.description}
          onChange={(e) => setNewTodo({ ...newTodo, description: e.target.value })}
          placeholder="Description"
        />
        <input
          type="number"
          value={newTodo.priority}
          onChange={(e) => setNewTodo({ ...newTodo, priority: parseInt(e.target.value) })}
          placeholder="Priority"
        />
        <button onClick={newTodo.id ? updateTodoHandler : addTodoHandler}>
          {newTodo.id ? "Update Todo" : "Add Todo"}
        </button>
      </div>

      <div className="todo-list-section">
        <h2>Todos</h2>
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}

        {todos && todos.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Description</th>
                <th>Priority</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {todos.map((todo) => (
                <tr key={todo.id}>
                  <td>{todo.id}</td>
                  <td>{todo.title}</td>
                  <td>{todo.description}</td>
                  <td>{todo.priority}</td>
                  <td>
                    <button onClick={() => editTodoHandler(todo)}>Edit</button>
                    <button onClick={() => deleteTodoHandler(todo.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No Todos available</p>
        )}
      </div>
    </div>
  );
};

export default Todos;
