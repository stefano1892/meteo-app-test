import { createSlice } from "@reduxjs/toolkit";

interface InitialStateTypes {
    degree: string
}


const initialState: InitialStateTypes = {
    degree: "Celsius"
}

export const degreeSlice = createSlice({
    name: 'degreeSelection',
    initialState,
    reducers: {
        changeDegree: (state, action) => {
            state.degree = action.payload
        }
    }
})

export const { changeDegree }  = degreeSlice.actions;

export default degreeSlice.reducer;