import { createSlice } from '@reduxjs/toolkit';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer } from 'redux-persist';

const initialTasksState = {
    taskIDCounter: 0,
    tasks: [

    ],
};

export const tasksSlice = createSlice({
    name: 'tasks',
    initialState: initialTasksState,
    reducers: {
        addTask(state, action) {
            // 
            const id = state.taskIDCounter++;
            const name = action.payload.name;
            const date = action.payload.date;
            const completed = action.payload.completed;
            
            // 
            const newTask = taskFactory(id, name, date, completed);

            // 
            state.tasks.push(newTask);
        },
        toggleTaskCompleted(state, action) {
            const foundTask = state.tasks.filter((task) => task.id == action.payload.id)[0];
            foundTask.completed = !foundTask.completed;
        }
    },
});

const tasksConfig = {
    key: 'tasks',
    storage: AsyncStorage,
    blacklist: [],
};

export const tasksReducer = persistReducer(tasksConfig, tasksSlice.reducer);

export const {
    addTask, toggleTaskCompleted,
} = tasksSlice.actions;



// The factory used to create task objects
export const taskFactory = (id, name, date = null, completed = false) => {
    return {
        id: id,
        name: name,
        date: date,
        completed: completed,
    };
};