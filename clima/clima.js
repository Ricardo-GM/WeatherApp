const axios = require('axios');

const getClima = async(lat, lon) => {

    const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=577c1da99828619217b3082fcd061592&units=metric`)

    return res.data.main.temp;
}



module.exports = {
    getClima
}