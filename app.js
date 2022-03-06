const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');


const city = process.argv[2]; // node app Seoul
if (!city) {
    console.log('enter city!');
} else {
    geocode(city, (error, data) => {
        if (error) {
            return console.log(error);
        } // callback chaining
        forecast(data.latitude, data.longitude, (error, forecastData) => {
            if (error) {
                return console.log(error);
            }
            console.log(data.location);
            console.log(forecastData);
        })
    })
}