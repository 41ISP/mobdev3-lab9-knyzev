const Stats = ({todos}) => {
  const finishedTodos = 0
  const activeTodos = todos.length - finishedTodos 
  return (
    <div className="stats">
      Всего: {todos.length} | Активных: {activeTodos} | Завершено: {finishedTodos}
    </div>
  )
}


export default Stats