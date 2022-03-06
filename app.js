const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const city = process.argv[2]; // node app Seoul
if (!city) {
    console.log('enter city!');
} else {
    geocode(city, (error, {latitude, longitude, location} = {}) => { // geocode(city, (error, data) => { data는 객체
        if (error) {                                      // ㄴ> 기본값 지정.
            return console.log(error);
        } // callback chaining
        forecast(latitude, longitude, (error, forecastData) => { // data.latitude...
            if (error) {
                return console.log(error);
            }
            console.log(location);
            console.log(forecastData);
        })
    })
}