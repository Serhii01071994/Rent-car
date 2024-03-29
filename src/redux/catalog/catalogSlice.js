import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { getAllAdvertThunk, getCarBiIdThunk } from './catalogThunk';

const INITIAL_STATE = {
  carsAdvert: [],
  isLoading: true,
  pages: 1,
  currentCar: null,
  error: null,
};

const handleLoadMore = state => {
  state.pages += 1;
  state.isLoading = true;
};

const advertSlice = createSlice({
  name: 'advert',
  initialState: INITIAL_STATE,
  reducers: {
    loadMore: handleLoadMore,
    setCurrentCar: (state, payload) => {
      state.currentCar = payload.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getAllAdvertThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.carsAdvert = [...state.carsAdvert, ...action.payload];
        state.error = null;
      })

      .addCase(getCarBiIdThunk.fulfilled, (state, action) => {
        state.currentCar = action.payload;
        state.error = null;
      })

      .addMatcher(
        isAnyOf(getAllAdvertThunk.pending, getCarBiIdThunk.pending),
        state => {
          state.isLoading = true;
          state.error = null;
        }
      )

      .addMatcher(
        isAnyOf(getAllAdvertThunk.rejected, getCarBiIdThunk.rejected),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      );
  },
});

export const { loadMore, setCurrentCar } = advertSlice.actions;
export const catalogtReducer = advertSlice.reducer;
