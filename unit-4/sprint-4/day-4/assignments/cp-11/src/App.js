import { useState } from "react";
import "./App.css";
import { UserRow } from "./Component/UserRow";
import {
  Box,
  Button,
  Center,
  Checkbox,
  FormControl,
  Heading,
  FormLabel,
  Input,
  Select,
  TableContainer,
  Thead,
  Tr,
  Th,
  Tbody,
  Table,
} from "@chakra-ui/react";
import { useReducer } from "react";

const initialState = {
  name: "",
  gender: "Male",
  role: "FrontEnd Developer",
  maritalStatus: false,
};

//should have the cases "name", "gender", "role", "maritalStatus", and "reset" along with the default cases
const reducer = (state, action) => {
  switch (action.type) {
    case "name": {
      // console.log(action.payload);
      return { ...state, name: action.payload };
    }
    case "gender": {
      // console.log(action.payload);
      return { ...state, gender: action.payload };
    }
    case "role": {
      // console.log(action.payload);
      return { ...state, role: action.payload };
    }
    case "maritalStatus": {
      // console.log(action.payload);
      return { ...state, maritalStatus: action.payload };
    }
    case "reset": {
      return initialState;
    }
    default: {
      return state;
    }
  }
};

function App() {
  // note : Remove below const and instead import them from chakra import the following components from
  // const Box = () => <div />;
  // const Button = () => <div />;
  // const Center = () => <div />;
  // const Checkbox = () => <div />;
  // const FormControl = () => <div />;
  // const Heading = () => <div />;
  // const FormLabel = () => <div />;
  // const Input = () => <div />;
  // const Select = () => <div />;
  // // use Table Component from chakra ui to display the details
  // const TableContainer = () => <div />;

  // import and use the useReducer hook here, with the reducer function and the initialState.
  const [state, dispatch] = useReducer(reducer, initialState);
  //store the data in this object variable when you click on the submit button, to render, the data in the UI.
  const [submittedData, setSubmittedData] = useState([]);

  const HandleSubmitForm = (e) => {
    e.preventDefault();
    setSubmittedData([...submittedData, state]);
    dispatch({ type: "reset", payload: { ...initialState } });
  };

  // console.log(submittedData);

  return (
    <div className="App">
      <Heading as="h1">Login Form</Heading>
      <Box>
        <form data-testid="form-element" onSubmit={HandleSubmitForm}>
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input
              type="text"
              name="name"
              placeholder="Name"
              value={state.name}
              onChange={(e) =>
                dispatch({ type: "name", payload: e.target.value })
              }
            />

            <FormLabel>Gender</FormLabel>
            <Select
              name="gender"
              data-testid="gender-select"
              value={state.gender}
              onChange={(e) =>
                dispatch({ type: "gender", payload: e.target.value })
              }
            >
              <option value={"Male"}>Male</option>
              <option value={"Female"}>Female</option>
              <option value={"Prefer Not to Say"}>Prefer Not to Say</option>
            </Select>

            <FormLabel>Role</FormLabel>
            <Select
              name="role"
              data-testid="role-select"
              value={state.role}
              onChange={(e) =>
                dispatch({ type: "role", payload: e.target.value })
              }
            >
              <option value={"FrontEnd Developer"}>FrontEnd Developer</option>
              <option value={"BackEnd Developer"}>BackEnd Developer</option>
              <option value={"FullStack Developer"}>FullStack Developer</option>
            </Select>
            {/* 
            <Checkbox
              name="maritalStatus"
              checked={state.maritalStatus}
              onChange={(e) =>
                dispatch({
                  type: "maritalStatus",
                  payload: e.target.checked,
                })
              }
            >
              Married
            </Checkbox> */}
            <Input
              type="checkbox"
              name="maritalStatus"
              checked={state.maritalStatus}
              onChange={(e) =>
                dispatch({ type: "maritalStatus", payload: e.target.checked })
              }
            />
            <FormLabel>Married</FormLabel>

            <Center>
              <Button variant="solid" type="submit">
                SUBMIT
              </Button>
            </Center>
          </FormControl>
        </form>
      </Box>
      {/* map through the submittedData and render UserRow component to display the data in tabular format ELSE print "no users found"  in there is no user data */}
      {submittedData.length === 0 ? (
        <Heading data-testid="no-user-container">no users found</Heading>
      ) : (
        <TableContainer>
          <Table>
            <Thead>
              <Tr>
                <Th>S.no</Th>
                <Th>User</Th>
                <Th>Gender</Th>
                <Th>Role</Th>
                <Th>Marital Status</Th>
              </Tr>
            </Thead>
            <Tbody>
              {submittedData.map((data, index) => (
                <UserRow
                  key={index}
                  id={index + 1}
                  name={data.name}
                  maritalStatus={data.maritalStatus}
                  role={data.role}
                  gender={data.gender}
                />
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      )}
    </div>
  );
}

// DO NOT change/modify the exports
export default App;
export { reducer, initialState };
