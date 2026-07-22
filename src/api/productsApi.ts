import axios from "axios";

const API_URL = "https://fakestoreapi.com";


import type { Product } from "../types/Product";


export const getProducts = async (): Promise<Product[]> => {
  const response = await axios.get(
    `${API_URL}/products`
  );

  return response.data;
};


export const getCategories = async () => {
  const response = await axios.get(
    `${API_URL}/products/categories`
  );

  return response.data;
};


export const getProductsByCategory = async (
  category: string
) => {
  const response = await axios.get(
    `${API_URL}/products/category/${category}`
  );

  return response.data;
};