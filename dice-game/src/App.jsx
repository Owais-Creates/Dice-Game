import './App.css'
import MainPage from './Components/MainPage/MainPage'
import GamePlay from './Components/GamePlay/GamePlay'
import { useState } from 'react'

const App = () => {

  const [isGameStarted, setIsGameStarted] = useState(false);

  const gameToggle = () => {
    setIsGameStarted(true);
  }

  return (
    <>
      {isGameStarted ? <GamePlay /> : <MainPage toggle={gameToggle} />}
    </>
  )
}

export default App
