import './App.css';
import divisor from './images/pattern-divider-desktop.svg';
import divisorTwo from './images/pattern-divider-mobile.svg';
import diceIcon from './images/icon-dice.svg';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  function getUrl(){
    return 'https://api.adviceslip.com/advice/' + getRandomInt(224).toString()
  }


  const[advice,setAdvice] = useState('');
  const[id,setId]= useState('');
  const[update,setUpdate] = useState(0);

  useEffect(() =>{
    setTimeout(axios.get(getUrl())
    .then((response)  => {
      console.log(response.data)
      setAdvice(response.data.slip.advice)
      setId(response.data.slip.id)
      })
    .catch(err => {
      console.log(err)
      }));
  },[update]
  )
  
  return (
    
    <div className="App">
      <header className="App-header"> 
        <div className="Advice-box" style={{backgroundColor:'#313A49'}}>
          <div className = "Advice-title">Advice #{id}</div>
          <div className = "Advice-content">{advice}</div>
          <div className = "Advice-separator">
            <picture>
              <source media="(max-width: 450px)" alt='separator-pic' srcSet={divisorTwo} />
              <img alt='separator-pic' src={divisor}/>
            </picture>
          </div>
          <div className = 'Advice-dice-box'>
            <div className = "Advice-dice" onClick={()=>setUpdate(update+1)}>
            <img alt='dice-icon' className = "Dice-icon" src={diceIcon}/>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
