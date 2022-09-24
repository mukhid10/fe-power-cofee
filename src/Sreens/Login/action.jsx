import axios from "axios";

export const userLogin = async (data) => {
  try {
    return await axios.post("http://localhost:5000/users/login", data);
  } catch (error) {
    console.log("getProduct", error.message);
  }
};
