import styles from './GamePlay.module.css'
import Totalscore from '../Totalscore/Totalscore'
import NumberSelector from '../NumberSelector/NumberSelector'
import RollDice from '../RollDice/RollDice'
import { useState } from 'react'
const Gameplay = () => {
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [score, setScore] = useState(0);
  const [selectedIdx, setSelectedIdx] = useState(null);
  const [error, setError] = useState(" ");

  const rolledDice = () => {

    if (!selectedNumber) {
      setError("Please select a number");
      return;
    } else {
      setError(" ")
    }

    const randomNumber = Math.floor(Math.random() * 6) + 1;
    setCurrentDice(randomNumber);

    if (selectedNumber == randomNumber) {
      setScore((value) => value + 1);
      setError("YaY !! you guessed it right");
    }

    setSelectedIdx(undefined);
    setSelectedNumber(undefined)

  }

  const reset = () => {
    setScore(0);
    setError(" ")

  }


  return (
    <>
      <div>
        <Totalscore score={score} />
        <NumberSelector setSelectedNumber={setSelectedNumber} selectedIdx={selectedIdx} setSelectedIdx={setSelectedIdx} error={error} setError={setError} />
        <RollDice currentDice={currentDice} roll={rolledDice} />
      </div>

      <div className={styles.btn_container} >
        <button onClick={reset} className={styles.reset_btn}>Reset</button>
      </div>
    </>
  )
}

export default Gameplay
