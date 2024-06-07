import { useEffect } from 'react';
import { useColorScheme, StatusBar, SafeAreaView, Text } from 'react-native';
import { OrientationLock, lockAsync } from 'expo-screen-orientation';

import { Provider, useSelector, useDispatch } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store } from './store';
import { darkSystemColorScheme, lightSystemColorScheme, undefinedSystemColorScheme } from './store/theme';
import { persistor } from './store';

import * as Styles from './Styles/Styles';

export default function App() {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <AppComponent />
            </PersistGate>
        </Provider>
    );
}

function AppComponent() {
    // Get the redux store dispatch
    const dispatch = useDispatch();

    // Get the settings state
    const settings = useSelector(state => state.settings);
    const theme = settings.theme;

    // Get the device color scheme
    const systemColorScheme = useColorScheme();

    // Set the system color scheme based on user's device preferences
    useEffect(() => {
        if (systemColorScheme == "dark") {
            dispatch(darkSystemColorScheme());
        }
        else if (systemColorScheme == "light") {
            dispatch(lightSystemColorScheme());
        }
        else {
            dispatch(undefinedSystemColorScheme());
        }
    }, [systemColorScheme, dispatch]);

    // Set the orientation lock for the application
    lockAsync(OrientationLock.PORTRAIT_UP);

    const containerStyles = Styles.containerStyles(theme);

    return (
        <SafeAreaView style={containerStyles.container}>
            <StatusBar backgroundColor={theme.colors.background} barStyle={theme.isDark ? 'light-content' : 'dark-content'} />
        </SafeAreaView>
    );
}