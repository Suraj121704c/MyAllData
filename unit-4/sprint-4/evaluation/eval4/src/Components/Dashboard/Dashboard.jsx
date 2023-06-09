// Note : import the the mentioned components from chakra UI and remove the follwoing once imported
import React from "react";
import {
  Box,
  Button,
  Center,
  Img,
  SimpleGrid,
  Text,
  VStack,
  Select,
  Spinner,
} from "@chakra-ui/react";
import axios from "axios";
import { useReducer, useEffect } from "react";
// let Box = () => <div />;
// let Button = () => <div />;
// let Center = () => <div />;
// let Img = () => <div />;
// let SimpleGrid = () => <div />;
// let Text = () => <div />;
// let VStack = () => <div />;
// let Select = () => <div />;
// let Spinner = () => <div />;

const initialState = {
  data: [],
  isLoading: false,
  error: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "REQUEST": {
      return {
        ...state,
        isLoading: true,
        error: false,
        data: null,
      };
    }
    case "SUCCESS": {
      return {
        ...state,
        isLoading: true,
        error: false,
        data: action.payload,
      };
    }
    case "FAILURE": {
      return {
        ...state,
        isLoading: false,
        error: true,
      };
    }
    default: {
      return state;
    }
  }
};

export default function Dashboard() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [order, setOrder] = React.useState("asc");

  const fetchAndUpdate = (dispatch, order) => {
    dispatch({ type: "REQUEST" });
    axios
      .get(
        `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/cats?_sort=cost&_order=${order}`
      )
      .then((res) => {
        dispatch({ type: "SUCCESS", payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: "FAILURE" });
      });
  };

  useEffect(() => {
    fetchAndUpdate(dispatch, order);
  }, [order]);

  // console.log(state.data);

  const deleteCat = (id) => {
   return axios({
    method : "delete",
    url : `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/cats/${id}`
   })
  }

  const handleDelte = (id) => {
     deleteCat(id)
    fetchAndUpdate(dispatch, order);
  }

  return (
    <div>
      <div className="sortingButtons">
        <Button
          colorScheme={"green"}
          className="sortByCostAsc"
          isDisabled={order === "asc"}
          onClick={() => setOrder("asc")}
        >
          Sort by Asc
        </Button>
        <Button
          colorScheme={"red"}
          className="sortByCostDesc"
          m={2}
          isDisabled={order === "desc"}
          onClick={() => setOrder("desc")}
        >
          Sort by Desc
        </Button>
      </div>
      <Center>
        <Select placeholder="select option">
          <option value="Peterbald">Peterbald</option>
          <option value="Nebelung">Nebelung</option>
          <option value="Persian">Persian</option>
          <option value="Birman">Birman</option>
          <option value="Himalayan">Himalayan</option>
        </Select>
      </Center>

      {/* Map the below container against your data */}
      {state.isLoading === false ? (
        <Spinner />
      ) : (
        state?.data?.map((el) => (
          <SimpleGrid className="main_container" key={el.id}>
            <Box className="catsDetails">
              <Center>
                <Img src={el.image} alt={el.name} />
              </Center>

              <VStack spacing={2} p={2}>
                <Text className="name" fontSize={"20px"} fontWeight="bold">
                  {el.name}
                </Text>
                <Text className="cost">{el.cost}</Text>
                <Text className="likes">{el.likes}</Text>
                <Text className="breed">{el.breed}</Text>
                <Text className="description">{el.description}</Text>
                <Button className="delete" onClick={() => handleDelte(el.id)}>Delete</Button>
              </VStack>
            </Box>
          </SimpleGrid>
        ))
      )}
    </div>
  );
}
