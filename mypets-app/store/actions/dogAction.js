import {
  GET_DOGS,
  SET_LOADING,
  SET_ERROR,
  GET_BREEDS,
  GET_IMAGES,
  SEARCH_BY_NAME,
  CLEAR_SEARCH,
} from "../keys";
import apiDog from "../../apis/apiDog";
import { Cache } from "react-native-cache";


export function getDogs(payload) {
  return {
    type: GET_DOGS,
    payload,
  };
}

export function setError(payload) {
  return {
    type: SET_ERROR,
    payload,
  };
}

export function setLoading(payload) {
  return {
    type: SET_LOADING,
    payload,
  };
}

export function getBreeds(payload) {
  return {
    type: GET_BREEDS,
    payload,
  };
}

export function getImages(payload) {
  return {
    type: GET_IMAGES,
    payload,
  };
}

export function searchByName(payload) {
  return {
    type: SEARCH_BY_NAME,
    payload,
  };
}

export function clearAllSearch() {
  return {
    type: CLEAR_SEARCH,
  };
}

export function fetchDogs() {
  return async function (dispatch) {
    dispatch(setLoading(true));
    try {
      const { data } = await apiDog({
        method: "GET",
        url: "/breeds/list",
      });
      dispatch(getDogs(data.message));
      dispatch(setLoading(false));
    } catch (err) {
      console.log(err.response);
      dispatch(setError(err.response));
    }
  };
}

export function fetchImages(payload) {
  return async function (dispatch) {
    dispatch(setLoading(true));
    try {
      const { data } = await apiDog({
        method: "GET",
        url: `/breed/${payload}/images`,
      });
      dispatch(getImages(data.message));
      dispatch(setLoading(false));
    } catch (err) {
      console.log(err.response);
      dispatch(setError(err.response));
    }
  };
}

export function fetchBreeds(payload) {
  return async function (dispatch) {
    dispatch(setLoading(true));
    try {
      const { data } = await apiDog({
        method: "GET",
        url: `/breed/${payload}/list`,
      });
      dispatch(getBreeds(data.message));
      dispatch(setLoading(false));
    } catch (err) {
      console.log(err.response);
      dispatch(setError(err.response));
    }
  };
}
