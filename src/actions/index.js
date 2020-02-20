import { INCREMENT, DECREMENT, UPLOAD_IMAGE } from '../constants'
import { stringify } from 'qs';
import axios from 'axios';
import _ from 'lodash';

export const request = (method, api, params) => {
  const query =
    !_.isNil(params) && method === 'get'
      ? `?${stringify(params, { arrayFormat: 'brackets' })}`
      : '';
  const config = method === 'delete' ? { data: params } : params;

  if (!process.browser) {
    return axios[method](`${api}${query}`, config);
  }

  console.log('am i here?', `${api}${query}`);

  return axios[method](`${api}${query}`, config);
};

export const increment = (isServer) => {
  return dispatch => {
    dispatch({
      type: INCREMENT,
      from: isServer ? 'server' : 'client'
    })
  }
}

export const decrement = (isServer) => {
  return dispatch => {
    dispatch({
      type: DECREMENT,
      from: isServer ? 'server' : 'client'
    })
  }
}


export const getData = (dispatch) => {
  return request('get', 'https://dog.ceo/api/breeds/image/random').then(({ data }) => {
    dispatch({
      type: UPLOAD_IMAGE,
      data,
    })
  })
}
