import { createAsyncThunk } from '@reduxjs/toolkit';
import * as API from 'services/api';

export const getAllAdvertThunk = createAsyncThunk(
  'adverts/getAll',
  async (_, thunkAPI) => {
    try {
      const allCars = await API.getAllCars();
      console.log(`all`, allCars)
      return allCars;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getAdvertThunk = createAsyncThunk(
  'adverts/getAll',
  async (page, thunkAPI) => {
    try {
      const cars = await API.getAllAdvert(page);
      console.log(cars)
      return cars;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getCarBiIdThunk = createAsyncThunk(
  'adverts/getCarBiId',
  async (carId, thunkAPI) => {
    try {
      const data = await API.getCarById(carId);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
