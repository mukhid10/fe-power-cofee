import axios from "axios";

export const getCartByUserId = async (id) => {
  try {
    return await axios.post(`http://localhost:5000/carts/userId`, {
      userId: id,
    });
  } catch (error) {
    console.log("getProduct", error.message);
  }
};

export const addPayment = async (data) => {
  try {
    return await axios.post(`http://localhost:5000/payments`, data);
  } catch (error) {
    console.log("addPayment", error.message);
  }
};

export const deleteCart = async (id) => {
  try {
    return await axios.post(`http://localhost:5000/carts/delete`, {
      userId: id,
    });
  } catch (error) {
    console.log("deleteCart", error.message);
  }
};
