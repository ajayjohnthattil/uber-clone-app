import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    origin: null,
    destination: null,
    travelTimeInformation: null
}
//For dispatching into the DataLayer 
export const navSlice = createSlice({
    name:'nav',
    initialState,
    reducers:{
        setOrigin: (state, action)=>{
            state.origin = action.payload;
        },
        setDestination: (state, action)=>{
            state.destination = action.payload;
        },
        setTravelTimeinformation: (state, action)=>{
            state.travelTimeInformation = action.payload;
        },
    }
});


//Destructuring
export const {
    setOrigin,
    setDestination,
    setTravelTimeinformation
} = navSlice.actions;


//Selectors - for grabbing from the DataLayer
export const selectOrigin = (state) => state.nav.origin;
export const selectDestination = (state) => state.nav.destination;
export const selectTravelTimeInformation = (state) => state.nav.travelTimeInformation;

//no reducer provided for key nav + store does not have a valid reducer 
export default navSlice.reducer;