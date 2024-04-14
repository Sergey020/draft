import axios from 'axios';

const API_KEY = 'uHSLi07StIOlriMPxJGxUbSYsHDs6AFx'
const BASE_URL = 'https://app.ticketmaster.com/discovery/v2/';


export async function fetchData (page){
    const response = await axios.get(`${BASE_URL}/events.json?page=${page}&apikey=${API_KEY}`)
    console.log(response.data);
    return response.data;
}
fetchData(1);