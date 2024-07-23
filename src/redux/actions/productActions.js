// import apiCall from "../../apis/apiCall";
// import { ActionTypes } from "../constants/action-types";
// export const setProducts = (products) => {
//   return {
//     type: ActionTypes.SET_PRODUCTS,
//     payload: products,
//   };
// };

// export const fetchProducts = () => async (dispatch) => {
//   const response = await apiCall.get("/loaddata");
//   dispatch({ type: ActionTypes.FETCH_PRODUCTS, payload: response.data });
// };
// export const fetchProduct = (id) => async (dispatch) => {
//   const response = await apiCall.get(`/product/${id}`);
//   dispatch({ type: ActionTypes.SELECTED_PRODUCT, payload: response.data });
// };

// export const seelectedProduct = (product) => {
//   return {
//     type: ActionTypes.SELECTED_PRODUCT,
//     payload: product,
//   };
// };
import apiCall from "../../apis/apiCall";
import { ActionTypes } from "../constants/action-types";

export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const fetchProducts = () => async (dispatch) => {
  try {
    const response = await apiCall.get("/loaddata");
    dispatch({ type: ActionTypes.FETCH_PRODUCTS, payload: response.data });
  } catch (error) {
    console.error("Error fetching products:", error);
    // You might want to dispatch an error action here
  }
};

export const fetchProduct = (id) => async (dispatch) => {
  try {
    const response = await apiCall.get(`/loaddata/${id}`);
    dispatch({ type: ActionTypes.SELECTED_PRODUCT, payload: response.data });
  } catch (error) {
    console.error(`Error fetching product with id ${id}:`, error);
    // You might want to dispatch an error action here
  }
};

export const selectedProduct = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};
