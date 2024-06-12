import { SafeAreaView, ScrollView } from 'react-native';

import { useSelector } from 'react-redux';

import * as Styles from '../Styles/Styles';
import { Header } from '../Components/Header';

export function HomeScreen({ navigation, route }) {
    const settings = useSelector(state => state.settings);
    const theme = settings.theme;
    const containerStyles = Styles.containerStyles(theme);
    const headerProps = Styles.headerProps(theme);
    const scrollViewProps = Styles.scrollViewProps(theme);

    return (
        <SafeAreaView style={containerStyles.container}>
            <Header title="Home" rightImage={require("../assets/icons/plus.png")} {...headerProps} />
            <ScrollView {...scrollViewProps}>

            </ScrollView>
        </SafeAreaView>
    );
}