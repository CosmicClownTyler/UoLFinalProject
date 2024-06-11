import { SafeAreaView, ScrollView } from 'react-native';

import { useSelector } from 'react-redux';

import * as Styles from '../Styles/Styles';
import { ThemedHeader } from '../Components/Themed/ThemedHeader';

export function SettingsScreen({ navigation, route }) {
    const settings = useSelector(state => state.settings);
    const theme = settings.theme;
    const containerStyles = Styles.containerStyles(theme);
    const scrollViewProps = Styles.scrollViewProps(theme);

    return (
        <SafeAreaView style={containerStyles.container}>
            <ThemedHeader title="Settings" />
            <ScrollView {...scrollViewProps}>

            </ScrollView>
        </SafeAreaView>
    );
}