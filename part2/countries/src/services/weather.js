import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;
const API_URL = "https://api.openweathermap.org/data/2.5/weather"

const getWeather = (lat, lng) => {
  const request = axios.get(`${API_URL}?lat=${lat}&lon=${lng}&units=metric&appid=${API_KEY}`);
  const response = request.then(response => response.data);

  return response;
}

export default { getWeather };