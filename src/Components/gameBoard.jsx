import { useState, useEffect, useEffectEvent } from "react"
import Card from "./card"

const names = [
    "Elliot", 
    "Mr. Robot", 
    "Darlene", 
    "Angela", 
    "Cisco", 
    "Tyrell", 
    "Angela's Dad", 
    "WhiteRose", 
    "Dom"]



export default function GameBoard({onGame}){
    const api = "hbyoM8bjShB8yTTMHMs4WXToamP3rA9q"
    const [cardlinks, setCardLinks] = useState([
        `https://api.giphy.com/v1/gifs/JFo3BEQFmK4cU?api_key=${api}`,
        `https://api.giphy.com/v1/gifs/3ohjUZ3xMnAWOLPYek?api_key=${api}`
    ])
    const [cardImages, setCardImages] = useState([])
    
    const handleClickImage = (e) => {
        console.log(e);
    }

    useEffect(() => {
        let ignore = false;

        async function fetchCards() {
                if (ignore) return;

                const responses = await Promise.all(
                cardlinks.map(async (gif) => {
                    const res = await fetch(gif);
                    return res.json();
                })
            );

            if (!ignore) {
                let urls = responses.map((objRes) => objRes.data.images.original.url);
                setCardImages((prev) => [...prev, ...urls]);
            }
        }

        fetchCards();

        return () => {
            ignore = true;
        };
        
    }, [cardlinks]);
    
    return (
        <div className="gameGrid">
            {
                cardImages.map((url, index) => <Card onClick={handleClickImage} key={url} link={url} name={names[index]}/>)
            }
        </div>
    )
}