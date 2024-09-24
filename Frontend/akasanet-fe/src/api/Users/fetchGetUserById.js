import axios from "axios";

export const fetchGetUserById = async () => {
  try {
    const response = await axios.get("http://localhost:5000/users/1");
    return response.data;
  } catch (error) {
    console.log("Error fetching users:", error);
    return [];
  }
};
