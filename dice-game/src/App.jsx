import './App.css'
import MainPage from './Components/MainPage/MainPage'
import GamePlay from './Components/GamePlay/GamePlay'
import { useState } from 'react'

const App = () => {

  const [isGameStarted, setIsGameStarted] = useState(true);

  const gameToggle = () => {
    setIsGameStarted((val) => !val);
  }

  return (
    <>
      {isGameStarted ? <GamePlay /> : <MainPage toggle={gameToggle} />}
    </>
  )
}

export default App
