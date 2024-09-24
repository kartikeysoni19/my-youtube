import axios from "axios";

const BASE_URL = "https://youtube138.p.rapidapi.com";

const options = {
  method: 'GET',
  url: 'https://youtube138.p.rapidapi.com/auto-complete/',
  params: {
    hl: 'en',
    gl: 'US'
  },
  headers: {

    "X-RapidAPI-Key":"7b65eeea01msh640e66ba6375d89p1cacfdjsn778418f891f7",
        "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
  }
};


export const fetchDataFromApi = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};