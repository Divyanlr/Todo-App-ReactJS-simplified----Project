import { useState } from "react";

const Todo = () => {
  const [inputText, setInputText] = useState('');
  const [todo, setTodo] = useState(['Complete notes', 'Go to gym']);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editText, setEditText] = useState('');

  const InputTextUpdate = (e) => {
    setInputText(e.target.value);
  };

  const handleAdd = () => {
    if (inputText.trim() === '') return;
    setTodo([...todo, inputText]);
    setInputText('');
  };

  const handleDelete = (index) => {
    const updatedTodos = todo.filter((_, i) => i !== index);
    setTodo(updatedTodos);
  };

  const handleEditClick = (item, index) => {
    setEditingIndex(index);
    setEditText(item); 
  };

  const handleUpdate = (index) => {
    const updatedTodos = todo.map((item, i) =>
      i === index ? editText : item
    );
    setTodo(updatedTodos);
    setEditingIndex(null); 
    setEditText('');
  };

  return (
    <div className="todo-container">
      <div className="todo-input-section">
        <input type="text" value={inputText} onChange={InputTextUpdate} />
        <button onClick={handleAdd}>Add Todo</button>
      </div>

      <div>
        {todo.map((item, index) => (
          <div key={index} className="todo-item">
            {editingIndex === index ? (
              <>
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
                <button onClick={() => handleUpdate(index)}>Save</button>
              </>
            ) : (
              <>
                <span>{item}</span>
                <div>
                  <button style={{marginRight: 10}} onClick={() => handleDelete(index)}>Delete</button>
                  <button onClick={() => handleEditClick(item, index)}>Edit</button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todo;
