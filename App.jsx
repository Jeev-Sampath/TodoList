// allows for using useState, which is from the react library
import { useState } from "react"
import { useEffect } from "react"
//imports the css file with all of the classNames and their styles
import "./styles.css"
import { NewTodoForm } from "./NewTodoForm"
import { TodoList } from "./TodoList"



//export default does something idk what
export default function App(){

  
  //the use state function returns an item and a function to set it.
  //states are immutable on their own, and must be changed with the function
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")
    if(localValue === null){
      return []
    }
    return JSON.parse(localValue)
    
  })

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos])


  function addToDo(title){
    setTodos(currentTodos => {
      return [
        ...currentTodos,
        {id: crypto.randomUUID(), title, completed: false }
      ]
    })
  }

  function toggleTodo(id, completed){
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if(todo.id === id){
          return {...todo, completed}
        }
        return todo
      })
    })
  }

  function deleteItem(id){
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }
  
  return (
  <>
    <NewTodoForm onSubmit = {addToDo}/>
    <h1 className = "header">Todo List</h1>
    <TodoList todos = {todos} toggleTodo = {toggleTodo} deleteItem = {deleteItem}/>
  </>
  )

}