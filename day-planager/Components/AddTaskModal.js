import { StyleSheet, View, TouchableOpacity, Image, Text, TextInput } from 'react-native';

import { Modal } from './Modal';
import { useState } from 'react';

export function AddTaskModal(props) {
    // Deconstruct props
    const { shown, style, onClose, onAddTask } = props;

    const [taskName, setTaskName] = useState("");

    const onModalClose = () => {
        onClose();
    };

    const addTask = () => {
        onModalClose();

        if (!verifyTaskName(taskName)) {
            return;
        }

        setTaskName("");

        const task = {
            name: taskName,
        };

        onAddTask(task);
    };

    const verifyTaskName = (name) => {
        return name.trim() != "";
    };

    return (
        <Modal shown={shown} style={style} onClose={onModalClose} >
            <View style={taskModalStyles.row}>
                <TextInput
                    placeholder='Your task here...'
                    value={taskName}
                    onChangeText={setTaskName}
                    autoFocus={true}
                    style={[taskModalStyles.text, taskModalStyles.textInput]}
                    onSubmitEditing={addTask}
                />
                <TouchableOpacity style={taskModalStyles.button} onPress={addTask}>
                    <Image
                        tintColor={'#ffffff'}
                        source={require("../assets/icons/plus.png")}
                        style={taskModalStyles.image}
                    />
                </TouchableOpacity>
            </View>
        </Modal>
    );
}

const taskModalStyles = StyleSheet.create({
    row: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    text: {
        color: '#ffffff',
    },
    textInput: {
        flex: 8,
        backgroundColor: 'transparent',
        padding: 10,
    },
    button: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        height: '50%',
        aspectRatio: '1/1',
    },
});