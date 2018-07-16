const axios = require('axios');

const getWeither = async (lat, lng) => {

    let latEncondeURL = encodeURI( lat );
    let lngEncondeURL = encodeURI( lng );
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${latEncondeURL}&lon=${lngEncondeURL}&units=metric&appid=5d661566b1427bc78d8909c0db9b396c`;

    let resp = await axios.get(url);

    return resp.data.main.temp;
};

module.exports = {
    getWeither
};