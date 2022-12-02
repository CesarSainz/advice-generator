import './App.css';
import divisor from './images/pattern-divider-desktop.svg';
import divisorTwo from './images/pattern-divider-mobile.svg';
import diceIcon from './images/icon-dice.svg';
import AdviceGenerator from './DataFetching.js';
import SeparatingData from './SeparatingData.js';

function App() {
  return (
    
    <div className="App">
      <header className="App-header"> 
        <div className="Advice-box" style={{backgroundColor:'#313A49'}}>
          <div className = "Advice-title">Advice #{SeparatingData("id")}</div>
          <div className = "Advice-content">{SeparatingData("advice")}</div>
          <div className = "Advice-separator">
            <picture>
              <source media="(max-width: 450px)" alt='separator-pic' srcSet={divisorTwo} />
              <img alt='separator-pic' src={divisor}/>
            </picture>
          </div>
          <div className = 'Advice-dice-box'>
            <div className = "Advice-dice" onClick={()=>window.location.reload(false)}>
            <img alt='dice-icon' className = "Dice-icon" src={diceIcon}/>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
