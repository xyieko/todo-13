import { useState } from 'react';
import './App.css'
import Button from './components/Button';
import Todos from './components/Todos';7
import { TODOS } from './data/data';

function App() {

  const [todos, setTodos] = useState(TODOS);
  const [todoInput, setTodoInput] = useState("")

  console.log(todos);


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
 
    const newTodo = 
    {
      id:(todos.length + 1),
      body:todoInput
    }

setTodos([...todos, newTodo]);
setTodoInput("");
  }

  return (
   <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="todo"value={todoInput} onChange={e =>{ setTodoInput(e.target.value);
        }}required/>
        <button type='submit'>Add Todo</button>
      </form>

  <h2>My todos</h2>
  <Todos todos={todos} setTodos={setTodos} />
  <Button />
  <Button greeting="jambo" />
  <Button greeting="konichiwa" />
   </div>
  )
}

export default App