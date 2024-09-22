import { useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState('');

  const handleChange = (event) => {
    setName(event.target.value);
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(name);
  }

  return (
    <>
      <h1>Technical Baseline | Future Coders</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Enter food you want to search' required value={name} onChange={handleChange}></input>
        <input type="submit" value="Submit"></input>
      </form>
    </>
  )
}

export default App
