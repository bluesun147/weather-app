const request = require('request');

const url = 'http://api.weatherstack.com/current?access_key=7a6b5de2e07356b5635da2f06d6495f2&query=37.8267,-122.4233&units=f';

// 첫번째: options object, 두번째: function to run
request({url: url, json: true}, (error, response) => {
    // const data = JSON.parse(response.body); // json(lower)은 request 모듈의 옵션. 자동으로 parse하기 떄문에 이 코드 필요없음
    
    //console.log(response.body.current); // currently아닌 current

    const currD = response.body.current.temperature;
    const feelslikeD = response.body.current.feelslike;

    console.log(`${response.body.current.weather_descriptions[0]}, It is currently ${currD} degree, feels like ${feelslikeD} degree out.`);

})

// current degree, feelslike