import { useEffect, useReducer } from "react";
import userReducer from "./UseReducer";

const intialState = {
  isLoading: true,
  isError: false,
  data: null,
};
//Making it universal so that we can use it anywhere
const getUser = (dispatch) => {
  //loading
  dispatch({ type: "GET_USER_REQUEST" });
  fetch("https://reqres.in/api/users")
    .then((res) => res.json())
    .then((res) => {
      //success
      console.log(`payload`, res);
      dispatch({ type: "GET_USER_SUCCESS", payload: res });
    })
    .catch((err) => {
      //failure
      dispatch({ type: "GET_USER_FAILURE" });
    });
};

function Users() {
  const [state, dispatch] = useReducer(userReducer, intialState);
  console.log(state);
  useEffect(() => {
    console.log(`inside useEffect`);
    getUser(dispatch);
  }, []);

  // const getUser = () => {
  //   //loading
  //   dispatch({ type: "GET_USER_REQUEST" });
  //   fetch("https://reqres.in/api/users")
  //     .then((res) => res.json())
  //     .then((res) => {
  //       //success
  //       console.log(`payload`, res);
  //       dispatch({ type: "GET_USER_SUCCESS", payload: res });
  //     })
  //     .catch((err) => {
  //       //failure
  //       dispatch({ type: "GET_USER_FAILURE" });
  //     });
  // };

  if (state.isLoading) {
    return <h1>Loading .... </h1>;
  }

  if (state.isError) {
    return (
      <div>
        <h1>Errors Occured .... </h1>;
        <button onClick={() => getUser(dispatch)}>FETCH</button>
      </div>
    );
  }

  const { data } = state;

  return (
    <div>
      <h1>USERS</h1>
      {data?.data?.map((item) => (
        <div key={item.id}>{item.first_name}</div>
      ))}
      <button onClick={() => getUser(dispatch)}>FETCH</button>
      <br />
      <br />
      <button onClick={() => getUser(dispatch)}>REFRESH</button>
    </div>
  );
}

export default Users;
