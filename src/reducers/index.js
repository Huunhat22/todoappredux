import {combineReducers} from 'redux';
import tasks from './tasks';
import isDisplayForm from './isDisplayForm';
import editingTask from './editingTask';

const myReducer = combineReducers({
    tasks,   //tasks : tasks
    isDisplayForm,    //form : form
    editingTask
});

export default myReducer;