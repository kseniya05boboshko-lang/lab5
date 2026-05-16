import axios from 'axios';

async function getGeoInfo() {
    try {
        const response = await axios.get('https://json.geoiplookup.io/');
        console.log('Статус:', response.status);
        console.log('Данные:', response.data);
    } catch (error) {
        console.error('Ошибка:', error.message);
    }
}

getGeoInfo();

//Сервер json.geoiplookup.io поддерживает CORS и возвращает заголовок Access-Control-Allow-Origin: *. Поэтому браузер разрешает запрос. В Node.js запрос тоже работает, как и прежде.