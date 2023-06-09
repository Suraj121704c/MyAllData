// Note : import the the mentioned components from chakra UI and remove the follwoing once imported
import { Button, FormControl, Input } from "@chakra-ui/react";
import axios from "axios";
import { useReducer } from "react";

// let Button = () => <div />;
// let FormControl = () => <div />;
// let Input = () => <div />;

const initialState = {
  image: "",
  name: "",
  cost: "",
  likes: "",
  breed: "",
  description: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "image": {
      return { ...state, image: action.payload };
    }
    case "name": {
      return { ...state, name: action.payload };
    }
    case "cost": {
      return { ...state, cost: action.payload };
    }
    case "likes": {
      return { ...state, likes: action.payload };
    }
    case "breed": {
      return { ...state, breed: action.payload };
    }
    case "description": {
      return { ...state, description: action.payload };
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
  const [state, dispatch] = useReducer(reducer, initialState);

  const HandleSubmit = (e) => {
    e.preventDefault();
    handleAddCat(state);
    dispatch({ type: "reset", payload: { ...initialState } });
  };

  const handleAddCat = (data) => {
    addCats(data);
  };

  const addCats = (data = {}) => {
    return axios({
      method: "post",
      url: `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/cats`,
      data: {
        image: data.image,
        name: data.name,
        cost: data.cost,
        likes: data.likes,
        breed: data.breed,
        description: data.description,
      },
    })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="addCatContainer">
      <form className="form">
        <FormControl>
          <Input
            className="name"
            placeholder="Name"
            value={state.name}
            onChange={(e) =>
              dispatch({ type: "name", payload: e.target.value })
            }
          />
          <Input
            className="cost"
            placeholder="Cost"
            type="number"
            value={state.cost}
            onChange={(e) =>
              dispatch({ type: "cost", payload: e.target.value })
            }
          />

          <Input
            className="likes"
            placeholder="Likes"
            type="number"
            value={state.likes}
            onChange={(e) =>
              dispatch({ type: "likes", payload: e.target.value })
            }
          />
          <Input
            className="description"
            placeholder="Description"
            value={state.description}
            onChange={(e) =>
              dispatch({ type: "description", payload: e.target.value })
            }
          />
          <Input
            className="breed"
            placeholder="Breed"
            value={state.breed}
            onChange={(e) =>
              dispatch({ type: "breed", payload: e.target.value })
            }
          />
          <Button
            colorScheme={"green"}
            className="submitBtn"
            onClick={HandleSubmit}
          >
            Submit
          </Button>
        </FormControl>
      </form>
    </div>
  );
}
