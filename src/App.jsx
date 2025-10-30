import { useState } from 'react'
import './index.css'
import './App.css'
import Nav from './Components/Nav'


function App() {
  const [scoreList, setScoreList] = useState([0]);
  let bestScore = Math.max(...scoreList)
  
  return (
    <>
      <Nav score={scoreList[scoreList.length - 1]} bestScore={bestScore} />
    </>
  )
}

export default App
