import { SafeAreaView, ScrollView } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TableView, Section, Cell } from 'react-native-tableview-simple';

import { useSelector, useDispatch } from 'react-redux';
import { automaticColorScheme, darkColorScheme, lightColorScheme, automaticAccentColor, customAccentColor, setThemeAccentColor } from '../store/theme';

import * as Styles from '../Styles/Styles';
import { ThemedHeader } from '../Components/Themed/ThemedHeader';
import { ThemedColorPicker } from '../Components/Themed/ThemedColorPicker';

export function SettingsScreen({ navigation, route }) {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator initialRouteName='SettingsHome' screenOptions={{ headerShown: false }} >
            <Stack.Screen
                name="SettingsHome"
                component={SettingsHomeScreen}
            />
            <Stack.Screen
                name="Appearance"
                component={AppearanceScreen}
            />
            <Stack.Screen
                name="DateTime"
                component={DateTimeScreen}
            />
            <Stack.Screen
                name="Notifications"
                component={NotificationsScreen}
            />
        </Stack.Navigator>
    );
}

function SettingsHomeScreen({ navigation, route }) {
    const settings = useSelector(state => state.settings);
    const theme = settings.theme;
    const containerStyles = Styles.containerStyles(theme);
    const scrollViewProps = Styles.scrollViewProps(theme);
    const tableSectionProps = Styles.tableSectionProps(theme);
    const tableCellProps = Styles.tableCellProps(theme);

    return (
        <SafeAreaView style={containerStyles.container}>
            <ThemedHeader title="Settings" />
            <ScrollView {...scrollViewProps}>
                <TableView>
                    <Section header="General" {...tableSectionProps}>
                        <Cell
                            title="Date & Time"
                            cellStyle="Basic"
                            accessory="DisclosureIndicator"
                            onPress={() => { navigation.navigate('DateTime'); }}
                            {...tableCellProps}
                        />
                        <Cell
                            title="Notifications"
                            cellStyle="Basic"
                            accessory="DisclosureIndicator"
                            onPress={() => { navigation.navigate('Notifications'); }}
                            {...tableCellProps}
                        />
                    </Section>
                    <Section header="Display & Appearance" {...tableSectionProps}>
                        <Cell
                            title="Theme & Colors"
                            cellStyle="Basic"
                            accessory="DisclosureIndicator"
                            onPress={() => { navigation.navigate('Appearance'); }}
                            {...tableCellProps}
                        />
                    </Section>
                </TableView>
            </ScrollView>
        </SafeAreaView>
    );
}

function DateTimeScreen({ navigation, route }) {
    const settings = useSelector(state => state.settings);
    const theme = settings.theme;
    const containerStyles = Styles.containerStyles(theme);
    const scrollViewProps = Styles.scrollViewProps(theme);
    const tableSectionProps = Styles.tableSectionProps(theme);
    const tableCellProps = Styles.tableCellProps(theme);

    return (
        <SafeAreaView style={containerStyles.container}>
            <ThemedHeader title="Date & Time" left="Back" onLeft={navigation.goBack} />
            <ScrollView {...scrollViewProps}>
                <TableView>
                </TableView>
            </ScrollView>
        </SafeAreaView>
    );
}

function NotificationsScreen({ navigation, route }) {
    const settings = useSelector(state => state.settings);
    const theme = settings.theme;
    const containerStyles = Styles.containerStyles(theme);
    const scrollViewProps = Styles.scrollViewProps(theme);
    const tableSectionProps = Styles.tableSectionProps(theme);
    const tableCellProps = Styles.tableCellProps(theme);

    return (
        <SafeAreaView style={containerStyles.container}>
            <ThemedHeader title="Notifications" left="Back" onLeft={navigation.goBack} />
            <ScrollView {...scrollViewProps}>
                <TableView>
                </TableView>
            </ScrollView>
        </SafeAreaView>
    );
}

function AppearanceScreen({ navigation, route }) {
    const settings = useSelector(state => state.settings);
    const theme = settings.theme;
    const containerStyles = Styles.containerStyles(theme);
    const scrollViewProps = Styles.scrollViewProps(theme);
    const tableSectionProps = Styles.tableSectionProps(theme);
    const tableCellProps = Styles.tableCellProps(theme);

    const dispatch = useDispatch();

    // Functions for changing theme scheme and accent color
    const setSchemeAutomatic = () => {
        dispatch(automaticColorScheme());
    };
    const setSchemeDark = () => {
        dispatch(darkColorScheme());
    };
    const setSchemeLight = () => {
        dispatch(lightColorScheme());
    };
    const setAccentDefault = () => {
        dispatch(automaticAccentColor());
    };
    const setAccentCustom = () => {
        dispatch(customAccentColor());
    };
    const setAccentColor = (color) => {
        dispatch(setThemeAccentColor(color));
    };

    return (
        <SafeAreaView style={containerStyles.container}>
            <ThemedHeader title="Appearance" left="Back" onLeft={navigation.goBack} />
            <ScrollView {...scrollViewProps}>
                <TableView>
                    <Section header="Theme" {...tableSectionProps}>
                        <Cell
                            title="Automatic"
                            cellStyle="Basic"
                            accessory={theme.colorScheme == "automatic" ? "Checkmark" : null}
                            onPress={setSchemeAutomatic}
                            {...tableCellProps}
                        />
                        <Cell
                            title="Dark"
                            cellStyle="Basic"
                            accessory={theme.colorScheme == "dark" ? "Checkmark" : null}
                            onPress={setSchemeDark}
                            {...tableCellProps}
                        />
                        <Cell
                            title="Light"
                            cellStyle="Basic"
                            accessory={theme.colorScheme == "light" ? "Checkmark" : null}
                            onPress={setSchemeLight}
                            {...tableCellProps}
                        />
                    </Section>
                    <Section header="Accent Colors" {...tableSectionProps}>
                        <Cell
                            title="Automatic"
                            cellStyle="Basic"
                            accessory={theme.accentType == "automatic" ? "Checkmark" : null}
                            onPress={setAccentDefault}
                            {...tableCellProps}
                        />
                        <Cell
                            title="Custom"
                            cellStyle="Basic"
                            accessory={theme.accentType == "custom" ? "Checkmark" : null}
                            onPress={setAccentCustom}
                            {...tableCellProps}
                        />
                    </Section>
                </TableView>
                {theme.accentType == "custom" ?
                    <ThemedColorPicker onChange={setAccentColor} /> : null}
            </ScrollView>
        </SafeAreaView>
    );
}