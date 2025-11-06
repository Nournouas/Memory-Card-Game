export default function Nav({score, bestScore}){
    return (
        <nav>
            <img className="nav-img" src="https://raw.githubusercontent.com/syntax-samurai/fsociety/master/preview.png"/>
            <div>
                <p>Score: {score}</p>
                <p>Best Score: {bestScore}</p>
            </div>
        </nav>
    )
}