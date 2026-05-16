import axios from 'axios';

async function getVK() {
    try {
        const response = await axios.get('https://vk.com');
        console.log('Статус:', response.status);
        console.log('Длина HTML:', response.data.length);
    } catch (err) {
        console.error('Ошибка:', err.message);
    }
}
getVK();

//CORS (Cross-Origin Resource Sharing) – это механизм безопасности браузеров. Он запрещает скриптам с одного домена обращаться к ресурсам другого домена, если сервер явно не разрешил это через заголовок Access-Control-Allow-Origin. Сервер vk.com не отправляет такого заголовка для запросов из браузера. В Node.js же нет ограничений CORS – мы работаем на серверной стороне, где нет песочницы браузера.