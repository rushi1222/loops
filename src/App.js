import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function App() {




const [score,setScore] = useState(0);
const [balls,setBalls] = useState(0);
const [sixers,setSixers] = useState(0);
const [fours,setFours] = useState(0);
const [doubles,setDoubles] = useState(0);
const [singles,setSingles] = useState(0);
const [dotballs,setDotballs] = useState(0);
const [wickets,setWickets] = useState(0);
const [wides,setWides] = useState(0);

const scoreSetting = (number)=>{
setScore(score=> score+ number)
}
const ballCount = ()=>{
  setBalls(ball=> ball+1)
}
  return (
    
    <div className="App">
      <h1>Score:{score}</h1>
      <h1>Balls:{balls}</h1>
      <h1>Sixers:{sixers}</h1>
      <h1>Fours:{fours}</h1>
      <h1>Doubles:{doubles}</h1>
      <h1>Singles:{singles}</h1>
      <h1>Dot balls:{dotballs}</h1>
      <h1>Wickets:{wickets}</h1>
      <h1>Wides:{wides}</h1>
   <button onClick = {()=>{setSixers(e =>(e+6) ); scoreSetting(6);ballCount()}}>Sixer</button>
   <button onClick = {()=>{setFours(e =>(e+4) ); scoreSetting(4);ballCount()}}>Four</button>
   <button onClick = {()=>{setDoubles(e =>(e+2) ); scoreSetting(2);ballCount()}}>doubls</button>
   <button onClick = {()=>{setSingles(e =>(e+1) ); scoreSetting(1);ballCount()}}>single</button>
   <button onClick = {()=>{setDotballs(e=>(e+1));ballCount()}}>Dotballs</button>
   <button onClick = {()=>{setWickets(e=>(e+1));ballCount()}}>Wicket</button>
   <button onClick = {()=>{setWides(e=>(e+1));scoreSetting(1)}}>Wide</button>

    </div>
    
  );
}

export default App;
