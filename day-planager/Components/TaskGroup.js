import { useState } from 'react';

import { StyleSheet, View, Pressable, Image, Text } from 'react-native';

import { Task } from './Task';

export function TaskGroup(props) {
    // Deconstruct props
    const {
        title, titleStyle, headerStyleStyle, collapseStyle,
        tasks,
        taskProps,
        editing,
        style,
    } = props;

    const [collapsed, setCollapsed] = useState(false);

    return (
        <View style={[taskGroupStyles.container, style]}>
            <Pressable onPress={() => { setCollapsed(!collapsed); }}>
                <View style={[taskGroupStyles.headerStyle, headerStyleStyle]}>
                    <Text style={[taskGroupStyles.title, titleStyle]}>
                        {title}
                    </Text>
                    <View style={taskGroupStyles.collapseContainer}>
                        <Image
                            tintColor={collapseStyle?.color}
                            source={collapsed ? require("../assets/icons/arrow-up.png") : require("../assets/icons/arrow-down.png")}
                            style={[taskGroupStyles.collapse, collapseStyle]}
                        />
                    </View>
                </View>
            </Pressable>
            {!collapsed &&
                tasks.map((task, index) => {

                    const tasksCount = tasks.length;

                    let styles = [taskProps?.style, taskGroupStyles.task];

                    if (tasksCount == 1) styles.push(taskGroupStyles.singleTask);
                    else if (index == 0) styles.push(taskGroupStyles.topTask);
                    else if (index == tasksCount - 1) styles.push(taskGroupStyles.bottomTask);
                    else if (index > 0 && index < tasksCount) styles.push(taskGroupStyles.middleTask);

                    return (
                        <Task
                            task={task}
                            editing={editing}
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

const taskGroupStyles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 5,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#000000',
    },
    headerStyle: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#ffffff',
    },
    title: {
        fontSize: 18,
        textAlign: 'left',
        color: '#ffffff',
        padding: 5,
    },
    collapseContainer: {
        padding: 7,
        justifyContent: 'center',
    },
    collapse: {
        height: 14,
        aspectRatio: '1/1',
    },
    singleTask: {
        marginTop: 10,
    },
    topTask: {
        marginTop: 10,
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