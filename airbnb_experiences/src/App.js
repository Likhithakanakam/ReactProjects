import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Card from './Components/Card';
import data from './data';

function App() {
  return (
    <div>
    <Navbar/>
    <Hero/>
    <div className='App_div'>
    {data.map(d => (
      <Card 
      item={d}
      />
    ))}
    </div>
    </div>
  );
}
export default App;