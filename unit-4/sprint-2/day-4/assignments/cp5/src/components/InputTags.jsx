import Card from "./Card";
import React from "react";

const initState = {
  heroName: "",
  height: "",
  weight: "",
  powerLevel: "",
};

const InputTags = () => {
  const [details, setDetails] = React.useState(initState);
  const [data, setData] = React.useState([]);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setDetails({
      ...details,
      [name]: value,
    });
  };

  const SubmitDetails = (e) => {
    e.preventDefault();
    setData([...data, details]);
  };

  console.log(data);

  const { heroName, height, weight, powerLevel } = details;

  return (
    <>
      <form onSubmit={SubmitDetails}>
        <br />
        <input
          placeholder="heroName"
          onChange={handleInput}
          data-testid="input-name"
          type="text"
          value={heroName}
          name="heroName"
        />
        <br />
        <input
          placeholder="height"
          data-testid="input-height"
          type="text"
          onChange={handleInput}
          value={height}
          name="height"
        />
        <br />
        <input
          placeholder="weight"
          data-testid="input-weight"
          type="text"
          onChange={handleInput}
          value={weight}
          name="weight"
        />
        <br />
        <input
          placeholder="powerLevel"
          data-testid="input-power"
          type="text"
          onChange={handleInput}
          value={powerLevel}
          name="powerLevel"
        />
        <br />
        <br />
        <button
          data-testid="add-button"
          disabled={
            height === "" ||
            weight === "" ||
            powerLevel === "" ||
            powerLevel === ""
          }
        >
          Add SuperHero
        </button>
      </form>
      <br />
      <button data-testid="most-powerfull">Most Powerful Superhero</button>
      <button data-testid="all-superheroes">Show All</button>
      <Card data={data} />
    </>
  );
};

export default InputTags;
