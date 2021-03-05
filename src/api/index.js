import axios from 'axios';

const baseURL = 'https://api.github.com/users';

export const getUsersRequest = () => axios.get(baseURL + '?per_page=100')

export const getUserRequest = (username) => axios.get(`${baseURL}/${username}`)