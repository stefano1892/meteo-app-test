import { renderHook } from "@testing-library/react"
import { useTemperature } from "./useTemperature"
import { Provider } from "react-redux"
import { store } from "../store/store"

describe('useTemperature', () => {
    it('should return undefined if no city is provided', () => {
        const {result} = renderHook(() => useTemperature(), {wrapper: ({children}) => <Provider store={store}>{children}</Provider>})  

        expect(result.current).toBeUndefined()
    })
})