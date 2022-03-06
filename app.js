const request = require('request');

//const url1 = 'http://api.weatherstack.com/current?access_key=7a6b5de2e07356b5635da2f06d6495f2&query=37.8267,-122.4233';
const url1 = 'http://api.weatherstack.com/current?access_key=7a6b5de2e07356b5635da2f06d6495f2&query=';

// 첫번째: options object, 두번째: function to run
// request({url: url1, json: true}, (error, response) => { // 둘중 하나만. 하나는 null
//     // const data = JSON.parse(response.body); // json(lower)은 request 모듈의 옵션. 자동으로 parse하기 떄문에 이 코드 필요없음
//     if (error) { // low level error like no network connection
//         console.log('Unable to connect to weather service!');
//     }  else if (response.body.error) {
//         console.log('Unable to find location.');
//     } else {
//         const currD = response.body.current.temperature; // 현재 온도
//         const feelslikeD = response.body.current.feelslike; // 체감 온도
//         console.log(`${response.body.current.weather_descriptions[0]}, It is currently ${currD} degree, feels like ${feelslikeD} degree out.`);
//     }
// })

const url2 = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiYmx1ZXN1bjE0NyIsImEiOiJjbDBlaTB0N3AwamhrM2RvOWc2enc4ZzRoIn0.BqMI625cyh-okAEmQ2linA&limit=1';
//const url2 = 'https://api.mapbox.com/geocoding/v5/mapbox.places/12qz.json?access_token=pk.eyJ1IjoiYmx1ZXN1bjE0NyIsImEiOiJjbDBlaTB0N3AwamhrM2RvOWc2enc4ZzRoIn0.BqMI625cyh-okAEmQ2linA&limit=1';
request({url: url2, json: true}, (error, response) => { // json형식 가져오면서 자동으로 object로 parse.

    if (error) {
        console.log('No network connection!');
    } else if (response.body.features.length === 0) {
        console.log('Unable to find location!');    
    } else {
        const longitude = response.body.features[0].center[0]; // 경도
        const latitude = response.body.features[0].center[1]; // 위도
    
        console.log(`${longitude}, ${latitude}`);
    }
    
})