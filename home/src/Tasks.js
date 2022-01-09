import React, { useEffect, useReducer, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { tasksReducer, TYPES } from './reducer';

const initialTasksState = {
    tasks: [],
    completedTasks: []
};

const TASKS_STORAGE_KEY = 'TASKS_STORAGE_KEY';

const storeTasks = (taskMap) => {
    localStorage.setItem(
        TASKS_STORAGE_KEY,
        JSON.stringify(taskMap)
    );
}

const readStoredTasks = () => {
    const tasksMap = JSON.parse(localStorage.getItem(TASKS_STORAGE_KEY));

    return tasksMap ? tasksMap : initialTasksState;
}

function Tasks() {
    const [taskText, setTaskText] = useState('');
    const storedTasks = readStoredTasks();

    const [state, dispatch] = useReducer(tasksReducer, storedTasks);
    const { tasks, completedTasks } = state;

    useEffect(() => {
        console.log('UseEffect Tasks');
        storeTasks({ tasks, completedTasks });
    });

    const updateTaskText = event => {
        setTaskText(event.target.value);
    }

    const addTask = () => {
        dispatch({ type: TYPES.ADD_TASK, task: { taskText, id: uuidv4() } });
        setTaskText('');
    }

    const completeTask = completedTask => () => {
        dispatch({ type: TYPES.COMPLETE_TASK, completedTask });
    }

    const deleteTask = task => () => {
        dispatch({ type: TYPES.DELETE_TASK, task });
    }

    return (
        <div>
            <h3>Tasks</h3>
            <div className='form'>
                <input value={taskText} onChange={updateTaskText} />
                <button onClick={addTask}>Add Task</button>
            </div>
            <div className='task-list'>
                {
                    tasks.map(task => {
                        const { id, taskText } = task;

                        return (
                            <div key={id} onClick={completeTask(task)}>
                                {taskText}
                            </div>
                        );
                    })
                }
            </div>
            <div className='completed-list'>
                {
                    completedTasks.map(task => {
                        const { id, taskText } = task;

                        return (
                            <div key={id}>
                                {taskText}{' '}
                                <span onClick={deleteTask(task)} className='delete-task'>x</span>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Tasks;
