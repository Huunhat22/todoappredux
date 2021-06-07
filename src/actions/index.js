import * as types from './../constants/ActionTypes';
export const listAll = () => {
    return{
        type : types.LIST_ALL
    }
};

export const saveTask = (task) => {
    return{
        type : types.SAVE_TASK,
        task
    }
};

export const toggleForm = () =>{
    return{
        type: types.TOGGLE_FORM,
    }
};

export const openForm = () =>{
    return{
        type: types.OPEN_FORM,
    }
};

export const closeForm = () =>{
    return{
        type: types.CLOSE_FORM,
    }
};

export const changeStatus = (id) =>{
    return{
        type: types.CHANGE_STATUS,
        id      // id : id
    }
};

export const deleteTask = (id) =>{
    return{
        type: types.DELETE_TASK,
        id      // id : id
    }
};

export const updateTask = (task) =>{
    return{
        type: types.UPDATE_TASK,
        task      // id : id
    }
};

export const filterTable = (filter) =>{
    return{
        type: types.FILTER_TABLE,
        filter      // filter : filter  => filter.name , filter.status
    }
};

export const searchTask = (keyword) =>{
    return{
        type: types.SEARCH_TASK,
        keyword      // keyword : keyword
    }
};

export const sortTask = (sort) =>{
    return{
        type: types.SORT_TASK,
        sort      //  sort.by và  sort.value
    }
};