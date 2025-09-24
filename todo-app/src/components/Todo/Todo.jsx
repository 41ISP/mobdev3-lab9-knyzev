const Todo = () => {
    return (
        <div className="todo-item">
            <input type="checkbox" className="todo-checkbox" />
            <span className="todo-text">Изучить основы React</span>
            <button className="delete-btn">Удалить</button>
        </div>
    )
}


export default Todo