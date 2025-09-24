import { useState } from "react"
import Todo from "./components/Todo/Todo"

function App() {
  const [todoName, setTodoName] = useState("")
  const [todos, setTodos] = useState([])
  const handleAdd = () => {
    setTodos((todosOld) => [todoName, ...todosOld])
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
          <Todo />
        ))}
      </div>
      <div className="stats">
        Всего: 4 | Активных: 3 | Завершено: 1
      </div>
    </div>
  )
}

export default App
