import {
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { useReducer, useState } from "react";
import axios from "axios";

const initialState = {
  name: "",
  ownerName: "",
  address: "",
  areaCode: "",
  rent: "",
  isBachelorAllowed: false,
  isMarriedAllowed: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "name": {
      console.log(action.payload);
      return { ...state, name: action.payload };
    }
    case "ownerName": {
      console.log(action.payload);
      return { ...state, ownerName: action.payload };
    }
    case "address": {
      console.log(action.payload);
      return { ...state, address: action.payload };
    }
    case "areaCode": {
      console.log(action.payload);
      return { ...state, areaCode: action.payload };
    }
    case "rent": {
      console.log(action.payload);
      return { ...state, rent: action.payload };
    }
    case "isBachelorAllowed": {
      console.log(action.payload);
      return { ...state, isBachelorAllowed: action.payload };
    }
    case "isMarriedAllowed": {
      console.log(action.payload);
      return { ...state, isMarriedAllowed: action.payload };
    }
    case "reset": {
      return initialState;
    }
    default: {
      return state;
    }
  }
};

export default function Form() {
  // TODO: Remove below const and instead import them from chakra
  // const Button = () => <div />;
  // const Checkbox = () => <div />;
  // const FormControl = () => <div />;
  // const FormLabel = () => <div />;
  // const Input = () => <div />;
  const [state, dispatch] = useReducer(reducer, initialState);

  const HandleSubmitForm = (e) => {
    e.preventDefault();
    handleAddTodos(state)
    dispatch({ type: "reset", payload: { ...initialState } });
  };

  const handleAddTodos = (data) => {
    addTodos(data)
}

  const addTodos = (data={}) => {
    return axios({
      method: "post",
      url: `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/houses`,
      data: {
        name: data.name,
        ownerName: data.ownerName,
        address: data.address,
        areaCode: data.areaCode,
        rent: data.rent,
        isMarriedAllowed: data.isMarriedAllowed,
        isBachelorAllowed: data.isBachelorAllowed,
      },
    }).then((res)=>{
      console.log(res.data)
    }).catch((err)=>{
      console.log(err)
    })
  };

  return (
    <div className="addHouseContainer">
      <form className="form">
        <FormControl>
          <Input
            type="text"
            className="name"
            placeholder="Name"
            value={state.name}
            onChange={(e) =>
              dispatch({ type: "name", payload: e.target.value })
            }
          />
          <Input
            type="text"
            className="ownerName"
            placeholder="Owners name"
            value={state.ownerName}
            onChange={(e) =>
              dispatch({ type: "ownerName", payload: e.target.value })
            }
          />
          <Input
            type="text"
            className="address"
            placeholder="Address"
            value={state.address}
            onChange={(e) =>
              dispatch({ type: "address", payload: e.target.value })
            }
          />
          <Input
            type="text"
            className="areaCode"
            placeholder="Area code"
            value={state.areaCode}
            onChange={(e) =>
              dispatch({ type: "areaCode", payload: e.target.value })
            }
          />
          <Input
            type="text"
            className="rent"
            placeholder="Rent"
            value={state.rent}
            onChange={(e) =>
              dispatch({ type: "rent", payload: e.target.value })
            }
          />
          <Checkbox
            className="bachelor"
            checked={state.isBachelorAllowed}
            onChange={(e) =>
              dispatch({
                type: "isBachelorAllowed",
                payload: e.target.checked,
              })
            }
          >
            <FormLabel>Married Tenants Allowed</FormLabel>
          </Checkbox>
          <br />
          <Checkbox
            className="married"
            checked={state.isMarriedAllowed}
            onChange={(e) =>
              dispatch({
                type: "isMarriedAllowed",
                payload: e.target.checked,
              })
            }
          >
            <FormLabel>Bachelor Tenants Allowed</FormLabel>
          </Checkbox>
          <br />
          <Button className="submitBtn" onClick={HandleSubmitForm}>
            {" "}
            Submit
          </Button>
        </FormControl>
      </form>
    </div>
  );
}
