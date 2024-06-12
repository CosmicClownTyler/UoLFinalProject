import { useState } from 'react';

import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';

import { Task } from './Task';

export function TaskList(props) {
    // Deconstruct props
    const {
        title, titleStyle, titleContainerStyle,
        tasks,
        taskProps,
        style,
    } = props;

    const [collapsed, setCollapsed] = useState(false);

    return (
        <View style={[taskListStyles.container, style]}>
            <View style={[taskListStyles.titleContainer, titleContainerStyle]}>
                <Text style={[taskListStyles.titleStyle, titleStyle]}>
                    {title}
                </Text>
                <TouchableOpacity onPress={() => { setCollapsed(!collapsed); }}>
                    <Text style={[taskListStyles.collapseStyle]}>
                        {collapsed ? "Expand" : "Collapse"}
                    </Text>
                </TouchableOpacity>
            </View>
            {!collapsed &&
                tasks.map((task, index) => {

                    const tasksCount = tasks.length;

                    let styles = [taskProps?.style, taskListStyles.task];

                    if (index == 0) styles.push(taskListStyles.topTask);
                    else if (index == tasksCount - 1) styles.push(taskListStyles.bottomTask);
                    else if (index > 0 && index < tasksCount) styles.push(taskListStyles.middleTask);

                    return (
                        <Task
                            title={task.title}
                            date={task.date}
                            key={index}
                            {...taskProps}
                            style={styles}
                        />
                    );
                })
            }
        </View>
    );
}

const taskListStyles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 5,
        flexDirection: 'column',
        alignItems: 'center',
    },
    titleContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        backgroundColor: '#000000',
        borderBottomWidth: 1,
        borderBottomColor: '#ffffff',
        padding: 5,
    },
    titleStyle: {
        fontSize: 18,
        textAlign: 'left',
        color: '#ffffff',
    },
    collapseStyle: {
        fontSize: 16,
        textAlign: 'left',
        color: '#888888',
    },
    task: {

    },
    topTask: {
        borderBottomWidth: 0,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
    },
    middleTask: {
        borderBottomWidth: 0,
        borderTopWidth: 0,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
    },
    bottomTask: {
        borderTopWidth: 0,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
    },
});