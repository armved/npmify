import axios from 'axios';
import { GET_PACKAGES_FAILURE, GET_PACKAGES_REQUEST, GET_PACKAGES_SUCCESS } from '../constants/packageConstants';

export const getPackagesRequest = () => ({
  type: GET_PACKAGES_REQUEST,
});

export const getPackagesSuccess = packages => ({
  type: GET_PACKAGES_SUCCESS,
  packages,
});

export const getPackagesFailure = error => ({
  type: GET_PACKAGES_FAILURE,
  error,
});

export const getPackages = query => (
  (dispatch) => {
    dispatch(getPackagesRequest());
    return axios.get(`https://registry.npmjs.com/-/v1/search?text=${query}&size=5`)
      .then(response => dispatch(getPackagesSuccess(response.data.objects)))
      .catch(error => dispatch(getPackagesFailure(error)));
  }
);
