import { useEffect, useState } from "react"
import Todo from "./components/Todo/Todo"
import Stats from "./components/Stats/Stats"
import Filters from "./components/Filters/Filters"
import FilterButton from "./components/FilterButton/FilterButton"


function App() {
  const [todoName, setTodoName] = useState("")
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos")
    return savedTodos ? JSON.parse(savedTodos) : []
  })
  const [showTodos, setShowTodos] = useState(todos)
  const [filter, setFilter] = useState("all")

  useEffect(() => {
    setShowTodos(todos)
  }, [todos])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

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

      <Filters filter={filter} setFilter={setFilter}  />

      <div className="todo-list">
        {showTodos.map((el) => (
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
