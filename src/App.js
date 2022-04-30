import logo from './logo.svg';
import './App.css';

function App() {

  let table  = []

///for loop
  // for (let i = 1; i <= 100; i++) { ///first iteration
  //   let t = [];
  //   for (let j = 1; j <= 10; j ++){ ///second iteration
  //     if (i === 1 || i===2 || i ===3 || i ===5 || i === 9 || i === 15 || i === 25|| i === 45 || i === 67 || i === 89 || i === 96 ) {
  //   break;
  //   }
  //  if( (i*j)%44 === 0 || (i*j)%55 === 0 || (i*j)%66 === 0 || (i*j)%33 === 0 || (i*j)%21 === 0 || (i*j)%49 === 0 || (i*j)%69 === 0 || (i*j)%83 === 0 || (i*j)%97 === 0 ){
  //   break;
  //  }
  //  t.push(`${i}*${j} = ${i*j}`)
  //      }
  //    table.push(t)
  // }

///// while
let tableWhile = [];
let i = 1; 


while(i <= 5){
    let j = 1;
    let t = [];
  while(j <= 5 ){
  t.push(`${i}*${j} = ${i*j}`)
    j++
   
    }
    tableWhile.push(t)
  
  i++
 
  // console.log(t)
  
}
console.log(tableWhile)



  



  return (
    <div className="App">
    tables
    </div>
  );
}

export default App;
