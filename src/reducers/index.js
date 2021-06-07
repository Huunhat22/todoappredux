import {combineReducers} from 'redux';
import tasks from './tasks';
import isDisplayForm from './isDisplayForm';
import itemEditing from './itemEditing';
import filterTable from './filterTable';
import searchTask from './searchTask';
import sortTask from './sortTask';


const myReducer = combineReducers({
    tasks,   //tasks : tasks
    isDisplayForm,    //form : form
    itemEditing,
    filterTable,
    searchTask,
    sortTask
});

export default myReducer;