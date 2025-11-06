export default function Menu({onSelect}){
    return (
        <div className="game-menu">
            <button onClick={() => onSelect(3)}>Easy</button>
            <button onClick={() => onSelect(6)}>Medium</button>
            <button onClick={() => onSelect(9)}>Hard</button>
        </div>
    )
}