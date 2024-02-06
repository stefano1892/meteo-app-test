import { useSelector } from "react-redux"
import { ICity } from "../interfaces/ICity"
import { AppSelector } from "../store/store"
import { useMemo } from "react"

export const useTemperature = (city?: ICity) => {
    const degreeSelected = useSelector<AppSelector>((state) => state.degreeSelection.degree)

    const temperature = useMemo(() => {
        if(!city) return undefined

        if(degreeSelected === 'Celsius') return `${city.current.temperature}°C`
        else if(degreeSelected === 'Fahrenheit') return `${city.current.temperature + 32}°F`
        return undefined;
    }, [degreeSelected, city])

    return temperature
}