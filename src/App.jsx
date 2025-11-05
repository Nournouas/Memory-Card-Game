import { useState } from 'react'
import './index.css'
import './App.css'
import Nav from './Components/Nav'
import GameBoard from './Components/gameBoard'


function App() {
  const [scoreList, setScoreList] = useState([0]);
  let bestScore = Math.max(...scoreList);

  const addToCurrScore = () => {
    setScoreList(prevList => {
      const newList = [...prevList];
      newList[newList.length - 1] += 1; // add to the last item
      return newList;
    });
  };

  const handleScoreReset = () => {
    setScoreList([...scoreList, 0])
  }
  
  return (
    <>
      <Nav score={scoreList[scoreList.length - 1]} bestScore={bestScore} />
      <GameBoard onGame={addToCurrScore} onReset={handleScoreReset} currScore={scoreList[scoreList.length - 1]}/>
    </>
  )
}

export default App
