import { useState } from "react"
import Button from "./Button"
import "./App.css"

function Joke(){
    const [ Joke, setJoke] = useState("");

    const fetchApi = () => {
        const url = "https://sv443.net/jokeapi/v2/joke/Programming?type=single";
        fetch(url)
        .then((res) => res.json())
        .then((data) => setJoke(data.joke));    
    }

    return (
        <>
            <div className="joke">
                <Button callApi={fetchApi}/>   
                <p>{Joke}</p>
            </div>
        </>
    )
}

export default Joke