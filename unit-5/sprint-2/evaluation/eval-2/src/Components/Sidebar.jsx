
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { sort } from "../Redux/ProductReducer/action";


export const Sidebar = () => {
 const dispatch = useDispatch()
 
  const handleChange = (e) => {
    dispatch(sort(e))
  }
  
  return (
    <DIV>
      <h3>Sort By Discount</h3>
      <div>
        <input
          data-testid="sort-asc"
          type="radio"
          name="sort"
          value={"asc"}
          onChange={(e) => handleChange(e.target.value)}
        />
        <label>Ascending</label>
        <br />
        <br />
        <input
          data-testid="sort-desc"
          type="radio"
          name="sort"
          value={"desc"}
          onChange={(e) => handleChange(e.target.value)}
        />
        <label>Descending</label>
      </div>
    </DIV>
  );
};

const DIV = styled.div`
  width: 15%;
  border-right: 1px solid gray;
`;
