
export const TYPES = {
    ADD_TASK: 'ADD_TASK',
    COMPLETE_TASK: 'COMPLETE_TASK',
    DELETE_TASK: 'DELETE_TASK'
};

export const tasksReducer = (state, action) => {
    console.log('state', state, 'action', action);

    switch (action.type) {
    case TYPES.ADD_TASK:
        return {
            ...state,
            tasks: [...state.tasks, action.task]
        }
    case TYPES.COMPLETE_TASK:
        const { completedTask } = action;

        return {
            ...state,
            completedTasks: [...state.completedTasks, completedTask],
            tasks: state.tasks.filter(t => t.id !== completedTask.id)
        }
    case TYPES.DELETE_TASK:
        return {
            ...state,
            completedTasks: state.completedTasks.filter(t => t.id !== action.task.id)
        }
    default:
        return state;
    }
}
