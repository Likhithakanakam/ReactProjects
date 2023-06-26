import React from "react";
import './App.css';
import Dice from './components/Dice'
import {nanoid} from "nanoid"
import Confetti from 'react-confetti'
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";

function App() {
  const [diesArray,setDiesArray] = React.useState(allNewDice())

  const[tenzies,setTenzies] = React.useState(false)
  const [numberOfRolls,setNumberOfRolls] = React.useState(0)

  const [openDialog, handleDisplay] = React.useState(false);

  const [startTime, setStartTime] = React.useState(new Date());
  const [endTime, setEndTime] = React.useState(null);
  const [timeElapsed, setTimeElapsed] = React.useState(86400);
  const [bestTime,setBestTime] = React.useState(localStorage.getItem("BestTime") || 86400)

  function handleClose() {
    handleDisplay(false);
  };

  function allNewDice(){
    const dieNumbers=[]
    for(let i=0;i<10;i++)
    {
      dieNumbers.push({
        value:Math.ceil((Math.random() * 6)),
        isHeld:false,
        id:nanoid()
      })
    }
    return dieNumbers
  }

  React.useEffect(()=>{
    const held = diesArray.every(die => die.isHeld)
    const firstValue =diesArray[0].value
    const sameValue =diesArray.every(die=>die.value === firstValue)
    if(held && sameValue){
      setTenzies(true)
      setEndTime(new Date())
      handleDisplay(true)
    }

  },[diesArray])

  React.useEffect(()=>{
    setTimeElapsed((startTime>endTime ? startTime - endTime : endTime - startTime)/1000)
  },[endTime])

  React.useEffect(()=>{
    if(localStorage.getItem("BestTime") === null ||
    (parseFloat(localStorage.getItem("BestTime")) >= timeElapsed) )
    {
      localStorage.setItem("BestTime",timeElapsed?.toString())
      setBestTime(localStorage.getItem("BestTime"))
    }
  },[timeElapsed])

  function handleRoll(){
    setNumberOfRolls(prevValue => prevValue+1)
    setDiesArray(prevArray => prevArray.map(die => (
      die.isHeld ? die : {...die,value:Math.ceil((Math.random() * 6))}
      )))
  }

  const diesArrayForRender = diesArray.map(die =>( 
    <Dice key={die.id} id={die.id} value={die.value} isHeld={die.isHeld} handleClick={holdDice}/>
  ))

  function holdDice(id){
    setDiesArray(prevArray =>(
      prevArray.map(die => die.id === id ? {...die,isHeld: !die.isHeld} : die)
    )
    )
  }

  function handleNewGame(){
    setDiesArray(allNewDice())
    setTenzies(false)
    setNumberOfRolls(0)
    setStartTime(new Date())
  }

  return (
    <div class="container">
      {tenzies && 
      <div>
        <Confetti/>
        <Dialog onClose={handleClose} open = {openDialog}>
          <div className="dialogStyle">
            <DialogTitle> Congratulations..... </DialogTitle>
            <h3 style = {{ marginTop: "-10px", padding: "5px 10px" }}>
                  Number Of times dice Rolled: {numberOfRolls}
            </h3>
            <h3 style = {{ marginTop: "-15px", padding: "5px 10px" }}>
                  Time Taken to Win: {timeElapsed} seconds 
            </h3>
            <h3 style = {{ marginTop: "-15px", padding: "5px 10px" }}>
                  Best Time: {bestTime} seconds 
            </h3>

            <div className="divStyle">
               <button className = "dialog_button" onClick = {handleNewGame}>
                  New Game
               </button>
               <button className = "dialog_button" onClick = {handleClose}>
                  Close
               </button>
            </div>
            </div>
         </Dialog>
         </div>
         }
      <h1 className="title">Tenzies</h1>
      <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <div class="dice_container">
      {diesArrayForRender}
      </div>
      <button className="roll_button" onClick={tenzies ? handleNewGame : handleRoll}>
        {tenzies ? "New Game" : "Roll"}
      </button>
    </div>
  );
}

export default App;
