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