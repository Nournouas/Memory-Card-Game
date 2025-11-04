

export default function Card({link, onClick, name}){

    return(
        <div className="card">
            <img src={link} alt="" srcset="" className="image" onClick={() => onClick(name)}/>
        </div>
    )
}