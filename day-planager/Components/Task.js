import { useState } from 'react';

import { StyleSheet, View, Text } from 'react-native';
import { Checkbox } from './Checkbox';

export function Task(props) {
    // Deconstruct props
    const {
        title, titleStyle,
        date, dateStyle,
        checkboxProps,
        style,
    } = props;

    const [completed, setCompleted] = useState(false);

    return (
        <View style={[taskStyles.container, style]}>
            <View style={taskStyles.textContainer}>
                <Text style={[taskStyles.text, taskStyles.titleText, titleStyle]}>
                    {title}
                </Text>
                <Text style={[taskStyles.text, taskStyles.dateText, dateStyle]}>
                    {date}
                </Text>
            </View>
            <View style={[taskStyles.checkboxContainer]}>
                <Checkbox onToggle={() => { setCompleted(!completed); }} checked={completed} {...checkboxProps} />
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
    titleText: {
        fontWeight: 'bold',
    },
    dateText: {

    },
});