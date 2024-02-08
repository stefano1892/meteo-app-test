import { renderHook } from "@testing-library/react"
import { useTemperature } from "./useTemperature"
import { Provider } from "react-redux"
import { store } from "../store/store"

describe('useTemperature', () => {
    it('should return undefined if no city is provided', () => {
        const {result} = renderHook(() => useTemperature(), {wrapper: ({children}) => <Provider store={store}>{children}</Provider>})  

        expect(result.current).toBeUndefined()
    })

    it('should return something if city is provided', () => {
        const {result} = renderHook(() => useTemperature({
            "request":{
               "type":"City",
               "query":"Milan, Italy",
               "language":"en",
               "unit":"m"
            },
            "location":{
               "name":'rome',
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
         }), {wrapper: ({children}) => <Provider store={store}>{children}</Provider>})  

        expect(result.current).toBeDefined()
    })
})