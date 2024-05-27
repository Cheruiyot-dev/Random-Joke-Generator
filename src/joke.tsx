import Button from "./Button";
import './joke.css'
import { useState } from "react";

interface JokeData {
    joke: string;
}

const Joke: React.FC = () => {
    const [Joke, setJoke] = useState<string>("");
    const fetchApi = async () => {
        try{
            const response = await fetch("https://sv443.net/jokeapi/v2/joke/Programming?type=single");
            const data: JokeData = await response.json()
            setJoke(data.joke)
        } catch(error) {
            console.error("Error fetching joke:", error);
            
        }
        
      
    };
    return(
        <div className="joke">
            <Button callApi={fetchApi}/>
            <p>{Joke}</p>
        </div>
    )
}

export default Joke;