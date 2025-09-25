const Todo = ({ name, status, id ,handleDelete ,handleToggle }) => {
    return (
        <div className="todo-item">
            <input onChange={() => handleToggle(id)} type="checkbox" className="todo-checkbox" />
            <span className="todo-text">{name}</span>
            <button onClick={() => handleDelete(id)} className="delete-btn">Удалить</button>
        </div>
    )
}


export default Todo