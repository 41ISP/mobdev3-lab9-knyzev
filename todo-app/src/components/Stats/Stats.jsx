const Stats = ({todos}) => {
  const finishedTodos = todos.filter((todo) => todo.status).length
  const activeTodos = todos.length - finishedTodos 
  return (
    <div className="stats">
      Всего: {todos.length} | Активных: {activeTodos} | Завершено: {finishedTodos}
    </div>
  )
}


export default Stats