import { createSlice } from '@reduxjs/toolkit';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer } from 'redux-persist';

import { Colors } from '../Styles/Colors';

const initialThemeState = {
    systemColorScheme: undefined,
    colorScheme: "automatic",
    accentType: "automatic",
    customAccentColor: "#ff0000",
    colors: Colors.dark,
    isDark: true,
};

export const themeSlice = createSlice({
    name: 'theme',
    initialState: initialThemeState,
    reducers: {
        // Revert all to default
        revertToDefaultTheme: () => {
            console.warn("RESET");
            state = initialThemeState;
        },
        // Theme and accent settings
        darkSystemColorScheme: (state) => {
            state.systemColorScheme = "dark";

            state = updateStateTheme(state);
        },
        lightSystemColorScheme: (state) => {
            state.systemColorScheme = "light";

            state = updateStateTheme(state);
        },
        undefinedSystemColorScheme: (state) => {
            state.systemColorScheme = undefined;

            state = updateStateTheme(state);
        },
        automaticColorScheme: (state) => {
            state.colorScheme = "automatic";

            state = updateStateTheme(state);
        },
        darkColorScheme: (state) => {
            state.colorScheme = "dark";

            state = updateStateTheme(state);
        },
        lightColorScheme: (state) => {
            state.colorScheme = "light";

            state = updateStateTheme(state);
        },
        automaticAccentColor(state) {
            state.accentType = "automatic";

            state = updateStateTheme(state);
        },
        customAccentColor(state) {
            state.accentType = "custom";

            state = updateStateTheme(state);
        },
        setThemeAccentColor(state, action) {
            state.customAccentColor = action.payload;

            state = updateStateTheme(state);
        },
    },
});

const themeConfig = {
    key: 'theme',
    storage: AsyncStorage,
    blacklist: ['systemColorScheme'],
};

export const themeReducer = persistReducer(themeConfig, themeSlice.reducer);

export const {
    revertToDefaultTheme,
    darkSystemColorScheme,
    lightSystemColorScheme,
    undefinedSystemColorScheme,
    automaticColorScheme,
    darkColorScheme,
    lightColorScheme,
    automaticAccentColor,
    customAccentColor,
    setThemeAccentColor,
} = themeSlice.actions;

// Use these functions to set color and accent values in the reducers above to ensure consistency
function updateStateTheme(theme) {
    theme = updateThemeColors(theme);
    theme = updateThemeAccentColor(theme);

    return theme;
}
function updateThemeColors(theme) {
    // If the color scheme is automatic, set the colors based on the system color scheme
    if (theme.colorScheme == "automatic") {
        // Dark
        if (theme.systemColorScheme == "dark") {
            theme = updateThemeDarkColors(theme);
        }
        // Light
        else if (theme.systemColorScheme == "light") {
            theme = updateThemeLightColors(theme);
        }
        // Undefined (use dark as default)
        else {
            theme = updateThemeDarkColors(theme);
        }
    }
    // If the color scheme is manually set to dark
    else if (theme.colorScheme == "dark") {
        theme = updateThemeDarkColors(theme);
    }
    // If the color scheme is manually set to light
    else if (theme.colorScheme == "light") {
        theme = updateThemeLightColors(theme);
    }

    return theme;
}
function updateThemeDarkColors(theme) {
    theme.colors = { ...Colors.dark, accent: theme.colors.accent };
    theme.isDark = true;

    return theme;
}
function updateThemeLightColors(theme) {
    theme.colors = { ...Colors.light, accent: theme.colors.accent };
    theme.isDark = false;

    return theme;
}
function updateThemeAccentColor(theme) {
    // If the accent type is automatic, set the accent color based on the current color scheme
    if (theme.accentType == "automatic") {
        // Dark
        if (theme.isDark) {
            theme = updateThemeDarkAccentColor(theme);
        }
        // Light
        else {
            theme = updateThemeLightAccentColor(theme);
        }
    }
    // If the accent type is custom, set the accent color based on the custom set accent
    else {
        theme = updateThemeCustomAccentColor(theme);
    }

    return theme;
}
function updateThemeDarkAccentColor(theme) {
    theme.colors = { ...theme.colors, accent: Colors.dark.accent };

    return theme;
}
function updateThemeLightAccentColor(theme) {
    theme.colors = { ...theme.colors, accent: Colors.light.accent };

    return theme;
}
function updateThemeCustomAccentColor(theme) {
    theme.colors = { ...theme.colors, accent: theme.customAccentColor };

    return theme;
}