import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Main from './Components/Main';

function App() {
  const[isDarkMode,setMode] = React.useState(true)

  function handleChange(){
    setMode(prevData => !prevData)
  }

  return (
    <div>
      <Navbar toHandleChange={handleChange} mode={isDarkMode} />
      <Main mode={isDarkMode}/>
    </div>
  );
}

export default App;
