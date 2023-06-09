import axios, { AxiosResponse } from "axios";

export const addProduct = (data: object) => {
  // Add product functionality here
  axios.post("http://localhost:8080/products", { data }).then((res: AxiosResponse) => {
    console.log(res.data)
  })
};

export const getProducts = () => {
  // Get products functionality
  return axios.get(`http://localhost:8080/products`).then((res: AxiosResponse) => {
    return res.data
  }).catch((err: AxiosResponse) => {
    console.log(err)
  })
};

export const updateLike = () => {
  // Update like functionality
};

export const updateDisLike = () => {
  // Update dislike functionality
};

export const deleteProduct = () => {
  // Delete functionality
};
