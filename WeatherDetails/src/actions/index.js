const API_KEY = '61d8b26ee9c54d1f250ae30583f7eb98';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
import axios from 'axios';

export const FETCH_WEATHER = 'FETCH WEATHER';

export function fetchWeather(city) {

    const url = `${ROOT_URL}&q=${city},us`;

    //Use axios to make ajax calls, and return a promise on it.

    const request = axios.get(url);

    // returns an action, and type is required.
    return {
        type: FETCH_WEATHER,
        payload: request
    };
}