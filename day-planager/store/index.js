import { configureStore, combineReducers } from '@reduxjs/toolkit';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer, persistStore } from 'redux-persist';

import { tasksReducer } from './tasks';
import { settingsReducer } from './settings';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    blacklist: ['settings'],
};

const rootReducer = combineReducers({
    tasks: tasksReducer,
    settings: settingsReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false })
});

export const persistor = persistStore(store);

// use this to delete all persisted data while developing
// persistor.pause();
// persistor.flush().then(() => {
//     return persistor.purge();
// });