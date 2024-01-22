import { createSlice } from "@reduxjs/toolkit";
import { ICity } from "../interfaces/ICity";

interface InitialStateTypes {
    searches: ICity[]
}

const initialState: InitialStateTypes = {
    searches: []
}

export const weatherSlice = createSlice({
    name: 'pastResearch',
    initialState,
    reducers: {
        addResearch: (state, action) => {
            state.searches.push(action.payload)
            if(state.searches.length > 5) {
                state.searches.shift()
            }
        }
    }
})

export const { addResearch }  = weatherSlice.actions;

export default weatherSlice.reducer;