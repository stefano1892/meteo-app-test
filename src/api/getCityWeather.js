import axios from "axios";
import { baseURL } from "../config";
import mock from './mock.json'

export const getWeather = async (city) => {
    //const urlWithCity = `&query=${city}`
    //const result = await axios.get(baseURL + urlWithCity)
    //const result = await axios.get('./mock.json')
    return new Promise((resolve, reject) => {
        const result = mock.find(item => item.location.name.toLowerCase() === city.toLowerCase())
        if(result !== undefined) {
            resolve(result)
        } else {
            reject('error')
        }
    })
}