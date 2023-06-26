import React from 'react';
import './index.css';

export default function Jokes({setup,punchline}){
    /**
     * Challenge:
     * - Create state `isShown` (boolean, default to `false`)
     * - Add a button that toggles the value back and forth
     */
    const [isShown,setIsShown] = React.useState(false)
    function handleClick(){
        setIsShown(prevValue => !prevValue)
    }
    return(
            <section>
                {setup && <h1>{setup}</h1>}
                {isShown && <p><strong>Punchline:</strong>{punchline}</p>}
                <button onClick={handleClick}>Show Punchline</button>
                <hr/>
            </section>
          )
}