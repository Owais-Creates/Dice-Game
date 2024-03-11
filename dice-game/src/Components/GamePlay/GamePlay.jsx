import React from 'react'
import Totalscore from '../Totalscore/Totalscore'
import NumberSelector from '../NumberSelector/NumberSelector'
import RollDice from '../RollDice/RollDice'
import { useState } from 'react'
const Gameplay = () => {
  const [selectedNumber, setSelectedNumber] = useState(1);
  const [currentDice, setCurrentDice] = useState(1);
  const [score, setScore] = useState(0)

  const rolledDice = () => {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    setCurrentDice(randomNumber);

    if (selectedNumber == randomNumber) {
      setScore((value) => value + 1)
    } else {
      setScore((value) => value - 1)
    }


  }


  return (
    <>
      <div>
        <Totalscore score={score} />
        <NumberSelector selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber} />
        <RollDice currentDice={currentDice} roll={rolledDice} />
      </div>
    </>
  )
}

export default Gameplay
