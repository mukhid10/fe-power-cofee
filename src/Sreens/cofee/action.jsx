import axios from "axios";

export const getProduct = async () => {
  try {
    return await axios.get("http://localhost:5000/products");
  } catch (error) {
    console.log("getProduct", error.message);
  }
};

export const getProductById = async (id) => {
  try {
    return await axios.get(`http://localhost:5000/products/${id}`);
  } catch (error) {
    console.log("getProduct", error.message);
  }
};

export const addCart = async (data) => {
  try {
    return await axios.post("http://localhost:5000/carts", data);
  } catch (error) {
    console.log("getProduct", error.message);
  }
};
