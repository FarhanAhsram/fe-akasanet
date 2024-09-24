import axios from "axios";

export const fetchDelProduct = async (idProduct) => {
  try {
    const response = await axios.delete(
      `http://localhost:5000/products/${idProduct}`
    );
    return response.data;
  } catch (error) {
    console.error(
      "Error deleting product:",
      error.response?.data || error.message
    );
    throw error;
  }
};
