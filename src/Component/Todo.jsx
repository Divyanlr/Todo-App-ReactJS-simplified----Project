import { useState } from "react";

const Todo = () => {

  const [inputText, setInputText] = useState('');
  const [todo, setTodo] = useState(['item1','item,2']);

  const InputTextUpdate = (e) => {
    setInputText(e.target.value)
  }

  const handleAdd = (inputText) => {
    if (inputText.trim() === '') return;
    setTodo([...todo, inputText]);
    setInputText('');
  }

  const handleDelete = (item, index) => {
    const updateTodos = todo.filter((item,i) => i !== index);
    setTodo(updateTodos);
  }

  return (
    <div className="todo-container">
      <div className="todo-input-section">
        <input className="" type='text' value={inputText} onChange={InputTextUpdate} />
        <button onClick={(e) => { handleAdd(inputText) }}>Add todo</button>
      </div>
      <div> 
        {todo.map((item, index) => (
          <div key={index} className="todo-item">
            {item}
            <button style={{ margin: 20 }} onClick={() => {handleDelete(item, index)}}>
              Delete todo
            </button>
          </div>
        ))}
      </div>
    </div >
  );
}

export default Todo;