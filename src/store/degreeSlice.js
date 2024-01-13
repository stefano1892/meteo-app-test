import { createSlice } from "@reduxjs/toolkit";

const initialState = {
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