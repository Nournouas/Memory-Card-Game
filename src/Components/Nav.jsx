export default function Nav({score, bestScore}){
    return (
        <nav>
            <img className="nav-img" src="src\assets\ChatGPT Image Oct 30, 2025, 05_24_04 PM.png"/>
            <div>
                <p>Score: {score}</p>
                <p>Best Score: {bestScore}</p>
            </div>
        </nav>
    )
}