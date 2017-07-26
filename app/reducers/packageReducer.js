import { GET_PACKAGES_SUCCESS, GET_PACKAGES_REQUEST, GET_PACKAGES_FAILURE } from '../constants/packageConstants';

const initialState = {
  isFetching: false,
  fetched: false,
  packagesList: [],
};

export default function packageReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PACKAGES_REQUEST:
      return {
        ...state,
        isFetching: true,
        fetched: false,
      };
    case GET_PACKAGES_SUCCESS:
      return {
        ...state,
        packagesList: action.packages,
        isFetching: false,
        fetched: true,
      };
    case GET_PACKAGES_FAILURE:
      return {
        ...state,
        error: action.error,
        isFetching: false,
        fetched: false,
      };
    default:
      return state;
  }
}
