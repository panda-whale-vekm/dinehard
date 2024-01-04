import React, {useState} from 'react';

function Name(props) {
  const { user_id, setUser_id } = props;
  const [ name, setName ] = useState('')
  const [ meal, setMeal ] = useState('')
  // const [ user_id, setUser_id ] = useState('')

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setName(value)
  // }
  // const handleClick = async (name) => {
  //   try {
  //     // console.log(name)
  //     const response = await fetch('http://localhost:3000/api/people', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify({name})
  //     })
  //     if (response.ok) {
  //       console.log('Able to post')
  //       setUser_id(response)
  //       console.log(user_id)
  //     }
  //   } catch(error) {
  //     console.log('Error, unable to post name', error)
  //   }
  // }

//   return (
//     <div>
//       <div className='inputBoxContainer'>
//         <label>Enter your name: </label>
//         <input className='nameInput' type='text' name='name' value={name} onChange={handleChange}/>
//         <button className='cuisineButton' onClick={() => handleClick(name, meal)}>Submit</button>
//       </div>
//     </div>
//   )
}

// export default Name
