import React, { useEffect } from 'react';
import './App.css';
import { useState } from "react";


function App(props) {
  const [list, setList] = useState([]);
  const [newItem, setNewItem] = useState("");
  const [category, setCategory] = useState("")
  


function handleSubmit(e) {
  e.preventDefault()
  
  const addItem = {
    id: new Date().getTime(),
    text: [newItem ,", ", category],
    completed: false,
  }

  setList([...list].concat(addItem))
  setNewItem("")
}

function deleteItem(id){
  const updateList = [...list].filter((newItem) => newItem.id !== id)

  setList(updateList)
};

return (
    <div>
      <h1>MY LIST</h1>

      <div className='App'>
        <div>
          <h4>Add an Item...</h4>
       
        <br/>

        <form onSubmit={handleSubmit}>
        <input type='text' placeholder='Type item here...'
        value={newItem} onChange={(e) => setNewItem(e.target.value)}/>
        <input type='text' placeholder='Enter item category'
        value={category} onChange={(e) => setCategory(e.target.value)}/>
        <button type='submit'>Add</button>
        </form>

        <ul>
         {list.map((newItem) => <li key={newItem.id}>
          {newItem.text}
          <button onClick={() => deleteItem (newItem.id)}>X</button>
         </li>)}
        </ul>
        
        </div>
      </div>
    </div>
  )
}

export default App;
