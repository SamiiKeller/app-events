import Cookies from 'universal-cookie';
import axios from 'axios';

const baseUrl = `http://localhost:3001`;
const httpGet = async (endpoint, params, requiresAuth = true) => {
  try {
    const headers = { Accept: 'application/json' };
    if (requiresAuth) {
      const cookies = new Cookies();
      const auth_token = cookies.get('access_token');
      headers['Authorization'] = `Bearer ${auth_token}`;
    }
    const response = await axios.get(`${baseUrl}/${endpoint}`, {
      params: params,
      timeout: 1000,
      headers: headers,
      withCredentials: false,
    });
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const httpPost = async (
  endpoint,
  data,
  requiresAuth = true,
  extraHeaders = {},
) => {
  try {
    const headers = { Accept: 'application/json', ...extraHeaders };
    if (requiresAuth) {
      const cookies = new Cookies();
      const auth_token = cookies.get('access_token');
      headers['Authorization'] = `Bearer ${auth_token}`;
    }
    const response = await axios.post(`${baseUrl}/${endpoint}`, data, {
      timeout: 1000,
      headers: headers,
      withCredentials: false,
    });
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const httpPut = async (
  endpoint,
  data,
  requiresAuth = true,
  extraHeaders = {},
) => {
  try {
    const headers = { Accept: 'application/json', ...extraHeaders };
    if (requiresAuth) {
      const cookies = new Cookies();
      const auth_token = cookies.get('access_token');
      headers['Authorization'] = `Bearer ${auth_token}`;
    }
    const response = await axios.put(`${baseUrl}/${endpoint}`, data, {
      timeout: 1000,
      headers: headers,
      withCredentials: false,
    });
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export { httpGet, httpPost, httpPut };
