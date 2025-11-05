

export default function Card({link, onClick, name}){

    return(
        <div className="card">
            <img src={link} className="image" onClick={() => onClick(name)}/>
        </div>
    )
}