export function TodoItem( { completed, id, title, toggleTodo, deleteItem }){

    return (
        <li>
            <label>
                <input 
                    type = "checkbox" 
                    checked = {completed}
                    onChange = {e => toggleTodo(id, e.target.checked)}
                />
                {title}
            </label>
            <button 
                onClick = {() => deleteItem(id)}
                className = "btn btn-danger" 
            >
                Delete
            </button>
        </li>
    )
}