import { useState } from "react"
import Todo from "./components/Todo/Todo"
import Stats from "./components/Stats/Stats"

function App() {
  const [todoName, setTodoName] = useState("")
  const [todos, setTodos] = useState([])
  const handleAdd = () => {
    const newTodo = {
      id: crypto.randomUUID(),
      name: todoName,
      status: false
    }
    setTodos((todosOld) => [newTodo, ...todosOld])
  }
  const handleDelete = (id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id))
  }
  const handleToggle = (id) => {
    setTodos((todos) => todos.map((todo) => todo.id === id ? { ...todo, status: !todo.status } : todo))
  }
  return (
    <div className="container">
      <div className="header">
        <h1>Todo App</h1>
        <p>Управляйте своими задачами</p>
      </div>

      <div className="add-todo">
        <div className="input-container">
          <input
            onChange={(e) => setTodoName(e.target.value)}
            value={todoName}
            type="text"
            className="todo-input"
            placeholder="Добавить новую задачу..." />
          <button
            onClick={handleAdd}
            className="add-btn"
            id="addBtn">Добавить
          </button>
        </div>
      </div>

      <div className="filters">
        <button className="filter-btn active" data-filter="all">Все</button>
        <button className="filter-btn" data-filter="active">Активные</button>
        <button className="filter-btn" data-filter="completed">Завершенные</button>
      </div>

      <div className="todo-list">
        {todos.map((el) => (
          <Todo {...el} handleDelete={handleDelete} handleToggle={handleToggle} key={el.id} />
        ))}
      </div>
      <div className="stats">
        <Stats todos={todos} />
      </div>
    </div>
  )
}

export default App
