import { StyleSheet, View, Text } from 'react-native';

import { Checkbox } from './Checkbox';

import { toggleTaskCompleted } from '../store/tasks';
import { useDispatch } from 'react-redux';

export function Task(props) {
    // Deconstruct props
    const {
        task,
        checkboxProps,
        nameStyle, dateStyle, style,
    } = props;

    const dispatch = useDispatch();

    return (
        <View style={[taskStyles.container, style]}>
            <View style={taskStyles.textContainer}>
                <Text style={[taskStyles.text, taskStyles.titleText, nameStyle]}>
                    {task.name}
                </Text>
                <Text style={[taskStyles.text, taskStyles.dateText, dateStyle]}>
                    {task.date}
                </Text>
            </View>
            <View style={[taskStyles.checkboxContainer]}>
                <Checkbox onToggle={() => { dispatch(toggleTaskCompleted(task)); }} checked={task.completed} {...checkboxProps} />
            </View>
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
        gap: 10,
        backgroundColor: '#000000',
        borderWidth: 1,
        borderColor: '#ffffff',
        borderRadius: 5,
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
});