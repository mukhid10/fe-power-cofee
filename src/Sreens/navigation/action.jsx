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
