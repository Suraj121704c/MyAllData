import React from "react";


function App() {

   const [counter , setCounter] = React.useState(0)
 
   const [player , setPlayer] = React.useState("Player 1")

   const [daku , setDaku] = React.useState("Still To Be Decided")
   

  return (
    <div style={{textAlign:"center"}} className="App" >
      <h1>Welcome to Reach Ten Mini-Game</h1>
      {/* Display Player Turn here */}
      <h2>Its Your Turn:  
      <span data-testid="turn-container" > {player}</span>
      </h2>

      {/* Buttons to increment the counter */}
      <div data-testid="buttons-container">
        <button onClick={() => {
          setCounter(counter+1)
          setPlayer(player === "Player 1"? "Player 2" : "Player 1")
          
        }} 
        
        disabled = {counter >= 10} 
        data-testid="add-one-btn">+1</button>

        <button onClick={() => {
          setCounter(counter+2)
          setPlayer(player === "Player 1"? "Player 2" : "Player 1")
        
        }} disabled = {counter >= 9} data-testid="add-two-btn" >+2</button>
      </div>

      {/* Display the counter here */}
      <h1 data-testid="counter">{counter}</h1>

      {/* Display the winner here */}
      <h2>winner:
      <span data-testid="winner-container"> {daku}</span>
      </h2>

      {/* Reset the Game with this button */}
      <button onClick={() => {
        setCounter(0)
        setPlayer("Player 1")
      }} 
        on data-testid="reset-btn" >Reset Game</button>
    </div>
  );
}

export default App;
