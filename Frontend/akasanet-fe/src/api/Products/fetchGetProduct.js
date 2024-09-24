import axios from "axios";

export const fetchGetProduct = async () => {
  try {
    const response = await axios.get("http://localhost:5000/products");
    return response.data;
  } catch (error) {
    console.log("Error fetching products:", error);
    return [];
  }
};
