import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { editProduct } from "../Redux/MovieReducer/action";

export const Edit = () => {
  const { id } = useParams();
  const [data, setData] = useState("");
  const [success, setSuccess] = useState("");
  const dispatch = useDispatch()

  const product = useSelector((store) => store.movieReducer.movies);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const handelSubmit = (e) => {
    e.preventDefault()
    // console.log(data)
    dispatch(editProduct(data, +id)).then(()=>{
      setSuccess(true)
    })
  };
  useEffect(()=>{
   const data = product.find((el) => el.id === +id)
   setData(data)
  },[])
  return (
    <div>
      <h1>Edit : {id}</h1>
      <h2>{success && "Product Edited SuccessFully!!!"}</h2>
      <form onSubmit={handelSubmit}>
        <input
          type="text"
          value={data.Title}
          onChange={(e) => {
            handleChange(e);
          }}
          placeholder="Title"
          name="Title"
        />
        <input
          type="text"
          value={data.Year}
          onChange={(e) => {
            handleChange(e);
          }}
          placeholder="Year"
          name="Year"
        />
        <input
          type="text"
          value={data.imdbID}
          placeholder="imdbID"
          onChange={(e) => {
            handleChange(e);
          }}
          name="imdbID"
        />
        <input
          type="text"
          value={data.Type}
          placeholder="Type"
          onChange={(e) => {
            handleChange(e);
          }}
          name="Type"
        />
        <input
          type="text"
          value={data.rating}
          placeholder="rating"
          onChange={(e) => {
            handleChange(e);
          }}
          name="rating"
        />
        <input
          type="text"
          value={data.Poster}
          placeholder="Poster"
          onChange={(e) => {
            handleChange(e);
          }}
          name="Poster"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
