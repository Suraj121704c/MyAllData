import { useState } from "react";
import "./App.css";
import Pintab from "./Components/Pintab";

function App() {
  const [otp, setOtp] = useState("");
  return (
    <div className="App">
      <Pintab length={6} maxChar={1}  setOtp={setOtp}/>
      OTP is {otp}
    </div>
  );
}

export default App;
