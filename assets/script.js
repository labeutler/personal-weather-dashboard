//Global Variables here
const searchHistory =  [];
weatherApiRootURL = 'https://api.openweathermap.org';
weatherApiKey = 'd2692fd833256c6caad1fc0c4c32881a';

//Front end element variables here

function getWeather(city) {
    //fetch api to get lat/lon
 
    //call getForecast with lat/lon

    /*
        .then display response to page
        -Current weather
        -5 day forecast
    */
}

//function getForecast(lat, lon) {}

//Create click handler that calls getWeather




// const app = {
//     init: () => {
//         document
//         .getElementById('btnGet')
//         .addEventListener('click', app.fetchWeather);
//         document
//         .getElementById('btnCurrent')
//         .addEventListener('click', app.getLocation);
//     },
//     fetchWeather: (ev) => {
//         let zipCode = document.getElementById('zipCode').value;
//         let key = 'd2692fd833256c6caad1fc0c4c32881a'
//         let lang = 'en';
//         let units = 'standard';
//         let url = 'http://api.openweathermap.org/geo/1.0/direct?q={Rochester},{MI},{USA}&limit={limit}&appid={d2692fd833256c6caad1fc0c4c32881a}';
//         fetch(url)
//             .then((resp) => {
//                 if (!resp.ok) throw new Error(resp.statusText);
//                 return resp.json();
//             })
//             .then((data) => {
//                 app.showWeather(data);
//             })
//             .catch(console.err);
//     },
//     getLocation: (ev) => {
//         let opts = {
//             enableHighAccuracy: true,
//             timeout: 1000 * 10, 
//             maximumAge: 1000 * 60 * 5,
//         };
//         navigator.geolocation.getCurrentPosition(app.ftw, app.wtf, opts);
//     },
//     ftw: (position) => {
//         document.getElementById('city').value = 
//         position.
//     }
// }