import React, { useState } from "react";
import ListContainer from "./listContainer";


// main app component holds the logo and the list container component
function App(){

  const [ user_id, setUser_id ] = useState()
  const [ name, setName ] = useState('')



  const handleChange = (e) => {
    const { name, value } = e.target;
    setName(value)
  }
  const handleClick = async (name) => {
    try {
      const response = await fetch('http://localhost:3000/api/people', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({name})
      })
      if (response.ok) {
        console.log('Able to post')
        setUser_id(await response.json())
        console.log(user_id)
      }
    } catch(error) {
      console.log('Error, unable to post name', error)
    }
  }

    return (
      <div className='body'>
          <h1 className='header'>
            DINE HARD
          </h1>
        <div>
        </div>
        <div className='optionsContainer'>
          <div className='inputBoxContainer'>
            <label>Enter your name: </label>
            <input className='nameInput' type='text' name='name' value={name} onChange={handleChange}/>
            <button className='cuisineButton' onClick={() => handleClick(name)}>Submit</button>
            <ListContainer user_id={user_id} />
          </div>
        </div>
      </div>
    );
};

export default App;