import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Origin: null,
  destination: null,
  TravelTimeInformation: null,
};

export const NavSlice = createSlice({
  name: "nav",
  initialState,
  reducer: {
    setOrigin: (state, action) => {
      state.Origin = action.payload;
    },
    setDestination: (state, action) => {
      state.destination = action.payload;
    },
    setTravelTimeInformation: (state, action) => {
      state.TravelTimeInformation = action.payload;
    },
  },
});

export const { setOrigin, setDestination, setTravelTimeInformation } =
  NavSlice.actions;

//SELECTOR

export const selectOrigin = (state) => state.nav.Origin;
export const selectDestination = (state) => state.nav.destination;
export const selectTravelTimeInformation = (state) =>
  state.nav.TravelTimeInformation;


  export default NavSlice.reducer
