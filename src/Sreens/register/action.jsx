import axios from "axios";

export const userRegister = async (data) => {
  try {
    return await axios.post("http://localhost:5000/users/register", data);
  } catch (error) {
    console.log("getProduct", error.message);
  }
};
