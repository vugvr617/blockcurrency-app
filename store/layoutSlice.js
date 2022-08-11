import { createSlice } from "@reduxjs/toolkit";

export const layoutSlice = createSlice({
    name: "lightMode",
    initialState: {
        isButtonToggled: false,
        currencySign: '$',
        currency: 'usd',
        stateChanger: 0,
        mainPrice: '',
        currentValue: '',
        selectedCoin: 'bitcoin'
    },
    reducers: {
        buttonToggleHandler: (state) => {
            state.isButtonToggled = !state.isButtonToggled;
        },
        currencySignReducer: (state, action) => {
            state.currencySign = action.payload;
        },
        currencyChangeReducer: (state, action) => {
            state.currency = action.payload;
        },
        mainPriceChange: (state, action) => {
            state.mainPrice = action.payload;
        },
        setSelectedCoin: (state, action) => {
            state.selectedCoin = action.payload;
        },
        setStateChanger: (state) => {
            state.stateChanger = state.stateChanger + 1;
        },
        setCurrentValue: (state, action) => {
            state.currentValue = action.payload;
        }
    }
})

export const { buttonToggleHandler, currencySignReducer, currencyChangeReducer, mainPriceChange, setSelectedCoin, setStateChanger, setCurrentValue } = layoutSlice.actions;
export default layoutSlice;