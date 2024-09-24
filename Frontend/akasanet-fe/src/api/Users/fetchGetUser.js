import axios from "axios";

export const fetchGetUser = async () => {
  try {
    const response = await axios.get("http://localhost:5000/users");
    return response.data;
  } catch (error) {
    console.log("Error fetching users:", error);
    return [];
  }
};
