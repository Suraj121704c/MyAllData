import "./App.css";
import { Button } from "@chakra-ui/react";
import Form from "./Components/Form/Form";
import Dashboard from "./Components/Dashboard/Dashboard";
import React from "react"


function App() {
  // TODO: Remove below const and instead import them from chakra
  // const Button = () => <div />;

  const [isFormVisible,setIsFormVisible] = React.useState(false)

  const handleToogleForm = () => {
    setIsFormVisible(!isFormVisible)
  }

  return (
    <div className="App">
      {/* <h1>${process.env.REACT_APP_JSON_SERVER_PORT}</h1> */}
      {/* <br /> */}
      <Button width="150px" className="toggleForm" onClick={handleToogleForm}>
        Toggle Form
      </Button>
      {isFormVisible && <Form />}
      <Dashboard />
    </div>
  );
}

export default App;
