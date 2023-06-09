import './App.css';
import Theme from './Components/Theme';
import Customizetheme from './Components/Customizetheme';
import FormExample from './Components/FormExample';

// import {extendTheme} from "@chakra-ui/react"

// const theme = extendTheme({
//   colors:{
//       brand:{
//           100:"#820000",
//           200:"#820000",
//           300:"#EFA3C8"
//       }
//   }
// })


function App() {
  return (
    <div className="App">
     {/* <Theme /> */}
     {/* <Customizetheme theme={theme}/> */}
     <FormExample/>
    </div>
  );
}

export default App;
