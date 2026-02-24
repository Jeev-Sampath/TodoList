import "./styles.css"
import { useState } from "react"

  
export function NewTodoForm(props){
    const [newItem, setNewItem] = useState("")

    function handleSubmit(e){
        e.preventDefault()

        if(newItem === ""){
            return
        }

        props.onSubmit(newItem)

        setNewItem("")
    }   
    return(
        <form className = "new-item-form" onSubmit = {handleSubmit}>
        <div className = "form-row">
            <label htmlFor = "item">New Item</label>
            <input 
            value = {newItem} 
            //to add functionality for the change, the eventlistener must point to the setNewItem function
            onChange = {e => setNewItem(e.target.value)} 
            type = "text" 
            id = "item"/>
        </div>
        <button className = "btn">Add</button>
        </form>
    )
}
