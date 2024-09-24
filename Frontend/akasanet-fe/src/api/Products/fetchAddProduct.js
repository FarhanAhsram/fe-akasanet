import axios from "axios";

export const fetchAddProduct = async (productData) => {
  try {
    const response = await axios.post(
      "http://localhost:5000/products",
      productData
    );
    return response.data;
  } catch (error) {
    console.error(
      "Error adding product:",
      error.response?.data || error.message
    );
    throw error;
  }
};
