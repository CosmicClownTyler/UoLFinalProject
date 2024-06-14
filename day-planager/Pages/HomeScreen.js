import { useState } from 'react';

import { SafeAreaView, ScrollView, View } from 'react-native';

import { useSelector } from 'react-redux';

import * as Styles from '../Styles/Styles';
import { Header } from '../Components/Header';

import { TaskGroup } from '../Components/TaskGroup';

import { AddTaskModal } from '../Components/AddTaskModal';

export function HomeScreen({ navigation, route }) {
    const settings = useSelector(state => state.settings);
    const theme = settings.theme;
    const containerStyles = Styles.containerStyles(theme);
    const taskModalProps = Styles.taskModalProps(theme);
    const headerProps = Styles.headerProps(theme);
    const scrollViewProps = Styles.scrollViewProps(theme);
    const taskGroupProps = Styles.taskGroupProps(theme);

    // Get all task data from the store
    const tasks = useSelector(state => state.tasks);

    // Whether the modal is shown for adding tasks
    const [addTaskModalShown, setAddTaskModalShown] = useState(false);

    return (
        <View style={{ width: '100%', height: '100%' }}>
            <SafeAreaView style={containerStyles.container}>
                <Header title="Home" rightImage={require("../assets/icons/plus.png")} onRight={() => setAddTaskModalShown(true)} {...headerProps} />
                <ScrollView {...scrollViewProps}>
                    <TaskGroup tasks={tasks.tasks} title="Unsorted" {...taskGroupProps} />
                </ScrollView>
            </SafeAreaView>
            <AddTaskModal {...taskModalProps} onClose={() => setAddTaskModalShown(false)} shown={addTaskModalShown} />
        </View>
    );
}