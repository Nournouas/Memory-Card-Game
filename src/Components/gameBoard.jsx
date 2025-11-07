import { useState, useEffect} from "react"
import Card from "./card"

//API KEY
const api = "LHkCFYNRXQBBqcaFt31I73R1o9LQHGnZ"

//shuffle array
function shuffle(array) {
  let currentIndex = array.length;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array
}

let apiLinks = [
        `https://api.giphy.com/v1/gifs/JFo3BEQFmK4cU?api_key=${api}`, // done
        `https://api.giphy.com/v1/gifs/3ohjUZ3xMnAWOLPYek?api_key=${api}`,// done
        `https://api.giphy.com/v1/gifs/3otOKo070l4jaNcBKo?api_key=${api}`,// done
        `https://api.giphy.com/v1/gifs/l3vR6dMy6iQ99IwLe?api_key=${api}`,//done
        `https://api.giphy.com/v1/gifs/11pIIEAHWERuhi?api_key=${api}`,
        `https://api.giphy.com/v1/gifs/bKm3Cc1IH4Z32?api_key=${api}`, // done
        `https://api.giphy.com/v1/gifs/l0MYPcaUE2galDLuE?api_key=${api}`, // done
        `https://api.giphy.com/v1/gifs/eLvDRp6ipJfEoP0OmI?api_key=${api}`,//done
        `https://api.giphy.com/v1/gifs/3oz8xIPJYlRp610TW8?api_key=${api}`//done
    ]


export default function GameBoard({onGame, onReset, currScore, difficulty, onVictory, onMenu}){
    //card api links
    // eslint-disable-next-line no-unused-vars
    const [cardlinks, setCardLinks] = useState(apiLinks.slice(0, difficulty))
    //image links
    const [cardImages, setCardImages] = useState([])
    //list of clicked images
    const [clickedImages, setClickedImages] = useState([])

    //Checks if an image has been clicked already
    function checkIfClicked(name){
        return clickedImages.includes(name);
    }

    function resetGame(){
        onReset();
        setClickedImages([]);
    }

    function playRound(e){
        onGame();
        setClickedImages([...clickedImages, e])
        setCardImages((currCardImages) => shuffle([...currCardImages]))
    }

    //Runs when an image is clicked
    const handleClickImage = (e) => {
        if (checkIfClicked(e)){
            alert("You lost! Try again")
            resetGame();
        }else{
            if (currScore + 1 === cardlinks.length){
                onVictory();
            }else {
                playRound(e)
            }
            
        }
    }
    
    //UseEffect for fetching from the API, only runs if the links change.
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
        <>
        <div className="gameGrid">
            {
                cardImages.map((url) => <Card onClick={handleClickImage} key={url} link={url} name={url}/>)
            }
        </div>
        <div className="controls-container">
            <button onClick={() => resetGame()}>Reset</button>
            <button onClick={() => onMenu()}>Change Difficulty</button>
        </div>
        
        </>
        
    )
}