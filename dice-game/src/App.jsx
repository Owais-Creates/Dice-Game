import './App.css'
import MainPage from './Components/MainPage/MainPage'
import Gameplay from './Components/GamePlay/GamePlay'
import { useState } from 'react'

const App = () => {

  const [isGameStarted, setIsGameStarted] = useState(false);

  const gameToggle = () => {
    setIsGameStarted((val) => !val);
  }

  return (
    <>
      {isGameStarted ? <Gameplay /> : <MainPage toggle={gameToggle} />}
    </>
  )
}

export default App
