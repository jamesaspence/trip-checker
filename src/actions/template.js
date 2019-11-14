import { getToken } from '../util/localStorage';
import axios from 'axios';

export const GET_TEMPLATES_SUCCESS = 'GET_TEMPLATES_SUCCESS';

export function getTemplates() {
  return dispatch => {
    axios.get(`${process.env.REACT_APP_API_URL}/templates`, {
      headers: {
        'X-Auth-Token': getToken()
      }
    }).then(res => {
        const { templates } = res.data.data;
        dispatch(getTemplatesSuccess(templates));
      }).catch(error => {
        //TODO handle error here
        throw error;
      });
  }
}

export function getTemplatesSuccess(templates) {
  return {
    type: GET_TEMPLATES_SUCCESS,
    templates
  };
}