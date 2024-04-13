// Discovery API (https://developer.ticketmaster.com/products-and-docs/apis/discovery-api/v2/#search-events-v2)
// API_KEY = 'uHSLi07StIOlriMPxJGxUbSYsHDs6AFx';
// Потрібно відрендерити колекцію  івентів і реалізувати пагінацію за допомогою бібліотеки 
// tui - pagination(https://www.npmjs.com/package/tui-pagination),
// Запити робимо використовуючи бібліотеку axios (https://www.npmjs.com/package/axios , https://axios-http.com/uk/docs/intro)
// і конструкції async\await; try\catch



import axios from 'axios';

const API_KEY = 'uHSLi07StIOlriMPxJGxUbSYsHDs6AFx'
const BASE_URL = 'https://app.ticketmaster.com/discovery/v2/';


async function feachData (page){
    const response = await axios.get(`${BASE_URL}/events.json?page=${page}&apikey=${API_KEY}`)
    console.log(response.data);
    return response.data;
}
feachData(1);