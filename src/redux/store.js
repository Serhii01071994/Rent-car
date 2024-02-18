import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { advertReducer } from './catalog/catalogSlice';


const persistConfig = {
  key: 'favorites',
  storage,
  whitelist: [''],
};

const persistedReducer = persistReducer(persistConfig, advertReducer);

export const store = configureStore({
  reducer: {
    // catalog: catalogReducer,
       // favorites: persistReducer(favoritesPersistConfig, favoritesReducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
