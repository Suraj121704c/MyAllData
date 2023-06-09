import "./App.css";
import { Stack,Center,Button } from '@chakra-ui/react';
import React from "react";
import Dashboard from "./Components/Dashboard/Dashboard";
import Form from "./Components/Form/Form";

// Note : import the the mentioned components from chakra UI and remove the follwoing once imported
// let Stack = () => <div />;
// let Center = () => <div />;
// let Button = () => <div />;

function App() {
  const [showForm,setShowForm] = React.useState(true);

  const toggleForm = () => {
    setShowForm(!showForm)
  }

  return (
    <Stack p={5} className="App">
      <Center>
        <Button width="150px" className="toggleForm"
        onClick={toggleForm}
        >
        {showForm ? "Show DashBoard Page" : "Show Add Cats Page"}
        </Button>
      </Center>
      {showForm ? <Dashboard /> : <Form />}
      {/* toggle between form and dashboard */}
    </Stack>
  );
}

export default App;
