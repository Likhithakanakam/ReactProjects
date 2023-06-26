import logo from './logo.svg';
import './App.css';
import Contacts from './Contacts';

function App() {
  return (
    <div className='contacts'>
     <Contacts 
        img = "./mr-whiskerson.png"
        name="Mr. Whiskerson"
        number = "(212) 555-1234"
        mail="mr.whiskaz@catnap.meow"
     />
     <Contacts 
        img = "./fluffykins.png"
        name="Fluffykins"
        number = "(212) 555-2345"
        mail="fluff@me.com"
     />
     <Contacts 
        img = "./felix.png"
        name="Felix"
        number = "(212) 555-4567"
        mail="thecat@hotmail.com"
     />
     <Contacts 
        img = "./pumpkin.png"
        name="Pumpkin"
        number = "(0800) CAT KING"
        mail="pumpkin@scrimba.com"
     />
    </div>
  );
}
export default App;
            
      