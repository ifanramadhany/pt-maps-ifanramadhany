import { GET_DOGS, SET_LOADING, SET_ERROR, GET_BREEDS, GET_IMAGES, SEARCH_BY_NAME, CLEAR_SEARCH } from "../keys";

const initialState = {
  dogs: [],
  dogsOrigin: [], 
  isError: null,
  isLoading: null,
  breeds: [],
  images: []
};

export default function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_DOGS:
      return { ...state, dogs: payload, dogsOrigin: payload };
    case SET_ERROR:
      return { ...state, isError: payload };
    case SET_LOADING:
      return { ...state, isLoading: payload };
    case GET_BREEDS:
      return { ...state, breeds: payload};
    case GET_IMAGES:
      return { ...state, images: payload}
    case SEARCH_BY_NAME:
      let resultByName = [];
      let name = state.dogs
      name.forEach((list) => {
        if (list.toLocaleLowerCase().search(payload.toLocaleLowerCase()) > -1) {
          resultByName.push(list);
        }
      });
      return { ...state, dogs: resultByName }
    case CLEAR_SEARCH:
      return { ...state, dogs: state.dogsOrigin }
    default:
      return state;
  }
}
