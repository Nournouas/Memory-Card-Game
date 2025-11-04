import { useState } from 'react'
import './index.css'
import './App.css'
import Nav from './Components/Nav'
import GameBoard from './Components/gameBoard'


function App() {
  const [scoreList, setScoreList] = useState([0, 1 , 2, 0, 3, 2, 0, 1]);
  let bestScore = Math.max(...scoreList);

  const handleSetScoreList = (value) => {
    setScoreList([...scoreList, value]);
  }
  
  return (
    <>
      <Nav score={scoreList[scoreList.length - 1]} bestScore={bestScore} />
      <GameBoard />
    </>
  )
}

export default App
