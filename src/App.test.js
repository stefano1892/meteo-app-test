// src/App.test.js
import React from 'react';
import { render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import {store} from './store/store';
import { Provider } from 'react-redux';
import { getWeather } from './api/getCityWeather';

jest.mock('./api/getCityWeather')

const city = {
    "request":{
       "type":"City",
       "query":"Milan, Italy",
       "language":"en",
       "unit":"m"
    },
    "location":{
       "name":"Milan",
       "country":"Italy",
       "region":"Lombardia",
       "lat":"45.467",
       "lon":"9.200",
       "timezone_id":"Europe/Rome",
       "localtime":"2024-01-12 21:10",
       "localtime_epoch":1705093800,
       "utc_offset":"1.0"
    },
    "current":{
       "observation_time":"08:10 PM",
       "temperature":3,
       "weather_code":113,
       "weather_icons":[
          "https://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0008_clear_sky_night.png"
       ],
       "weather_descriptions":[
          "Clear"
       ],
       "wind_speed":4,
       "wind_degree":97,
       "wind_dir":"E",
       "pressure":1024,
       "precip":0,
       "humidity":93,
       "cloudcover":0,
       "feelslike":2,
       "uv_index":1,
       "visibility":10,
       "is_day":"no"
    }
 }

describe('App', () => {
    const getCityWeatherMocked = jest.mocked(getWeather)

    beforeEach(() => {
        jest.clearAllMocks()
    })

    test('Render App', async () => {
        getCityWeatherMocked.mockResolvedValueOnce(city)
        const { asFragment, findByText } = render(
            <Provider store={store}>
                <App />
            </Provider>
        );

        await findByText('Milan');

        expect(asFragment()).toMatchSnapshot();
    });

    test('IsError works', async() => {
        getCityWeatherMocked
        .mockResolvedValue({})
        .mockRejectedValueOnce('error')

        const {getByPlaceholderText, getByRole, asFragment, findByText} = render(
            <Provider store={store}>
                <App />
            </Provider>
        )

        const cityToSearch = 'Vigevano'

        const inputElement = getByPlaceholderText('Inserisci la città...')
        await userEvent.type(inputElement, cityToSearch)

        const buttonElement = getByRole('button', {name: 'Cerca'})
        await userEvent.click(buttonElement)

        await findByText('Ops! La città selezionata non esiste.')

        expect(asFragment()).toMatchSnapshot()
    })

    /***
     * 
     * DA FARE
     * 
     * fare la ricerca e vedere il risultato
     * controllare inserimento ricerche passate
     * le ricerche passate devono essere massimo 5
     * quando clicco su una ricerca passata devo averla come ricerca corrente
     * 
     */
});
