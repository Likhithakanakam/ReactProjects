import logo from './logo.svg';
import './App.css';
import Jokes from './Jokes';
import JokesData from './JokeData';

function App() {

  return (
    <div className="App">
      {JokesData.map(Joke => <Jokes setup = {Joke.setup} 
                       punchline = {Joke.punchline} /> 
                    )
      }
    </div>
  );
}

export default App;
