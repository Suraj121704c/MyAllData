import './App.css';
import BoxExample from './Components/BoxExample';
import PhoneExample from './Components/PhoneExample';
import { ContainerExample } from './Components/ContainerExample';
import GridExample from './Components/GridExample';
import StackExample from './Components/StackExample';
import FlexSpacerExample from './Components/FlexSpacerExample';
import { AlertDialogExample } from './Components/AlertDIalogueExample';
import ModleExample from './Components/ModleExample';
function App() {
  return (
    <div className="App">
     {/* Box is basically div in chakra ui */}
    {/* <BoxExample /> */}
    {/* <PhoneExample /> */}
    {/* <ContainerExample /> */}
    {/* <GridExample /> */}
    {/* <StackExample /> */}
    <AlertDialogExample />
     {/* <FlexSpacerExample /> */}
     {/* <ModleExample /> */}
    </div>
  );
}

export default App;
