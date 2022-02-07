import axios from 'axios';

export const FETCH_DATA = 'FETCH_DATA';

const ROOT_URL = 'http://34.125.190.3/api/logos/';

export function fetchData(){
    const request = axios.get(`${ROOT_URL}`)
    console.log(request)
    return {
        type: FETCH_DATA,
        payload: request
    }
}