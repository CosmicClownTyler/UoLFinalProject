import { SafeAreaView, ScrollView, View } from 'react-native';

import { useSelector } from 'react-redux';

import * as Styles from '../Styles/Styles';
import { Header } from '../Components/Header';

import { TaskList } from '../Components/TaskList';
import { Task } from '../Components/Task';

const tasks = [
    {
        title: "Eggs",
        date: "Today",
    },
    {
        title: "Milk",
        date: "Tomorrow",
    },
    {
        title: "Salt",
        date: "Yesterday",
    },
];

export function HomeScreen({ navigation, route }) {
    const settings = useSelector(state => state.settings);
    const theme = settings.theme;
    const containerStyles = Styles.containerStyles(theme);
    const headerProps = Styles.headerProps(theme);
    const scrollViewProps = Styles.scrollViewProps(theme);
    const taskListProps = Styles.taskListProps(theme);
    const taskProps = Styles.taskProps(theme);

    return (
        <SafeAreaView style={containerStyles.container}>
            <Header title="Home" rightImage={require("../assets/icons/plus.png")} {...headerProps} />
            <ScrollView {...scrollViewProps}>
                <View style={{
                    width: '100%',
                    paddingVertical: 100,
                    alignItems: 'center',
                    // backgroundColor: 'red',
                }}>
                    
                    {/* <Task title="Eggs" date="Today" /> */}
                    {/* <Task title="Milk" date="Tomorrow" /> */}
                    {/* <Task title="Salt" date="Yesterday" /> */}
                    {/* <TaskList tasks={tasks} title="Groceries" /> */}

                    <Task title="Eggs" date="Today" {...taskProps} />
                    <Task title="Milk" date="Tomorrow" {...taskProps} />
                    <Task title="Salt" date="Yesterday" {...taskProps} />
                    <TaskList tasks={tasks} title="Groceries" {...taskListProps} />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}