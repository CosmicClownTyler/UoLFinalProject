import { combineReducers } from '@reduxjs/toolkit';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer } from 'redux-persist';

import { themeReducer } from './theme';

const settingsConfig = {
    key: 'settings',
    storage: AsyncStorage,
    blacklist: ['theme'],
};

const combinedSettingsReducer = combineReducers({
    theme: themeReducer,
});

export const settingsReducer = persistReducer(settingsConfig, combinedSettingsReducer);