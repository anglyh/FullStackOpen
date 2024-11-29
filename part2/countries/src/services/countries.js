import axios from "axios";

const API_URL = 'https://studies.cs.helsinki.fi/restcountries/'

const getAll = () => {
  const request = axios.get(`${API_URL}api/all`);
  const response = request.then((response) => response.data);
  
  return response;
}

export default { getAll }
