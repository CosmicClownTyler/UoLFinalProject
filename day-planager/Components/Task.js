import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

import { Checkbox } from './Checkbox';

import { toggleTaskCompleted, deleteTask } from '../store/tasks';
import { useDispatch } from 'react-redux';

export function Task(props) {
    // Deconstruct props
    const {
        task,
        editing,
        checkboxProps,
        nameStyle, dateStyle, style,
    } = props;

    const dispatch = useDispatch();

    return (
        <View style={[taskStyles.container, style]}>
            <View style={taskStyles.leftContainer}>
                <Checkbox onToggle={() => { dispatch(toggleTaskCompleted(task)); }} checked={task.completed} {...checkboxProps} />
                <Text style={[taskStyles.text, taskStyles.titleText, nameStyle]}>
                    {task.name}
                </Text>
            </View>
            {editing ?
                <TouchableOpacity onPress={() => { dispatch(deleteTask(task)); }}>
                    <Text style={[taskStyles.text, dateStyle, taskStyles.deleteText]}>
                        Delete
                    </Text>
                </TouchableOpacity>
                :
                <Text style={[taskStyles.text, taskStyles.dateText, dateStyle]}>
                    {task.date}
                </Text>
            }
        </View>
    );
}

const taskStyles = StyleSheet.create({
    container: {
        height: 40,
        width: '100%',
        padding: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#000000',
        borderWidth: 1,
        borderColor: '#ffffff',
        borderRadius: 5,
    },
    leftContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    rightContainer: {

    },
    checkboxContainer: {
        flexGrow: 0,
    },
    textContainer: {
        flexGrow: 1,
        flexDirection: 'row',
        gap: 10,
    },
    text: {
        fontSize: 20,
        textAlign: 'left',
        color: '#ffffff',
    },
    dateText: {

    },
    deleteText: {
        color: '#ff0000',
    },
});