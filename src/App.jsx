import { useState } from 'react'
import './index.css'
import './App.css'
import Nav from './Components/Nav'
import GameBoard from './Components/gameBoard'
import Menu from './Components/Menu'


function App() {
  const [scoreList, setScoreList] = useState([0]);
  const [difficulty, setDifficulty] = useState(6);
  const [gameMode, setGameMode] = useState(false);
  let bestScore = scoreList.length >= 1 ? Math.max(...scoreList) : "";
  console.log(scoreList)
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

  const handleSelectDifficulty = (difficulty) => {
    setDifficulty(difficulty);
    setGameMode(true)
  }

  const handleChangeToMenu = () =>{
    setGameMode(false);
  }

  const handleVictory = () => {
    addToCurrScore();
    alert("victory!");
    setGameMode(false);
    setScoreList((prev) => [...prev, 0])
  }


  if (gameMode === false){
    return (
      <>
        <Nav score={scoreList[scoreList.length - 1]} bestScore={bestScore} />
        <Menu onSelect={handleSelectDifficulty} />
      </>
    )
  }
  
  return (
    <>
      <Nav score={scoreList[scoreList.length - 1]} bestScore={bestScore} />
      <GameBoard onGame={addToCurrScore} onReset={handleScoreReset} currScore={scoreList[scoreList.length - 1]} difficulty={difficulty} onVictory={handleVictory} onMenu={handleChangeToMenu}/>
    </>
  )
}

export default App
