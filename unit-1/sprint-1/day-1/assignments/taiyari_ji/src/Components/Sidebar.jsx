import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";

export const Sidebar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const inintialBatch = searchParams.getAll("batch");
  const [batch, setBatch] = useState(inintialBatch || []);
  const initialPage = searchParams.get("page");
  const [page, setPage] = useState(initialPage || 1);
  
  const initialOrder = searchParams.get("order");
  const [order, setOrder] = useState(initialOrder || "");

  const handleChange = (e) => {
    let newBatch = [...batch];
    const value = e.target.value;
    if (newBatch.includes(value)) {
      newBatch = newBatch.filter((el) => el !== value);
    } else {
      newBatch.push(value);
    }
    setBatch(newBatch);
  };

  useEffect(() => {
    let params = {};
    batch && (params.batch = batch);
    page && (params.page = page);
    order && (params.order = order);
    setSearchParams(params);
  }, [batch, page, order]);

  return (
    <DIV>
      <h3>Filter by Batch</h3>
      <div>
        <input
          data-testid="batch-web101"
          type="checkbox"
          value={"WEB101"}
          onChange={handleChange}
          checked={batch.includes("WEB101")}
        />
        <label>WEB-101</label>
        <br />
        <br />
        <input
          data-testid="batch-js201"
          type="checkbox"
          value={"JS201"}
          onChange={handleChange}
          checked={batch.includes("JS201")}
        />
        <label>JS-201</label>
        <br />
        <br />
        <input
          data-testid="batch-rct101"
          type="checkbox"
          value={"RCT101"}
          onChange={handleChange}
          checked={batch.includes("RCT101")}
        />
        <label>RCT101</label>
        <br />
        <br />
        <input
          data-testid="batch-rct211"
          type="checkbox"
          value={"RCT211"}
          onChange={handleChange}
          checked={batch.includes("RCT211")}
        />
        <label>RCT211</label>
        <br />
        <br />
        <input
          data-testid="batch-nxm101"
          type="checkbox"
          value={"NXM101"}
          onChange={handleChange}
          checked={batch.includes("NXM101")}
        />
        <label>NXM-101</label>
        <br />
      </div>
      <br />
      <br />
      <h3>Sort By Score</h3>
      <div>
        <input
          data-testid="sort-asc"
          type="radio"
          name="sort"
          value={"asc"}
          onChange={(e) => setOrder(e.target.value)}
        />
        <label>Ascending</label>
        <br />
        <br />
        <input
          data-testid="sort-desc"
          type="radio"
          name="sort"
          value={"desc"}
          onChange={(e) => setOrder(e.target.value)}
        />
        <label>Descending</label>
      </div>
      <br />
      <br />
      <h3>Paginate</h3>
      <PAGE>
        <button
          data-testid="page-prev"
          onClick={() => setPage(page - 1)}
          disabled={page === 1}>
          Previous
        </button>
        <button data-testid="page-next" onClick={() => setPage(page + 1)}>
          Next
        </button>
      </PAGE>
    </DIV>
  );
};

const PAGE = styled.div`
  button {
    margin: 20px;
    border: none;
    width: 100px;
    height: 35px;
    margin-bottom: 10px;
  }
`;

const DIV = styled.div`
  width: 15%;
  border-right: 1px solid gray;
  text-align: left;
  margin-left: 20px;

  label {
    margin-left: 5px;
  }

  input,
  label {
    font-size: larger;
  }
`;
