import * as types from './../constants/ActionTypes';

//tạo chuỗi random cho ID
var createRamdom =() =>{
    return Math.floor((1+Math.random()) * 0x10000).toString(16).substring(1);
}

//Generate ID
var generateID =()=>{
  return createRamdom() + createRamdom() + '-' + createRamdom() + '-' + createRamdom() + '-'
         + createRamdom() + '-' + createRamdom() + '-' + createRamdom() + createRamdom();
}

//Hàm tìm task theo id
var  findIndex =(tasks,id)=>{
    
    var result = -1;
    tasks.forEach((task,index) =>{
      if (task.id === id) {
          result = index;
      }
    });
    return result;
  }

var data = JSON.parse(localStorage.getItem('tasks'));
var initialState = data ? data : [];

var myReducer = (state = initialState, action)=>{
    var id = '';
    var index = -1;
    switch(action.type){

        case types.LIST_ALL :
            return state;

        case  types.ADD_TASK:   // case này xử lý cho 2 trường hợp : add new task và edit task
            var task = {
                id : action.task.id,
                Namework :  action.task.Namework,
                Status : action.task.Status === 'true' ? true : false
            };

            //trường hợp tạo mới là không có ID
            if (!task.id) {
                task.id = generateID();
                state.push(task);
            } else {
                index = findIndex(state,task.id);
                state[index] = task;
            }
        
            localStorage.setItem('tasks',JSON.stringify(state));
            return [...state];

        case types.CHANGE_STATUS :
            id = action.id      // vì id là 1 tham số trong action gởi lên
            index = findIndex(state,id);
            if (index !== -1) {
                state[index] = {
                    ...state[index],
                    Status : !state[index].Status
                }
                localStorage.setItem('tasks',JSON.stringify(state));
            }
            // console.log(action);
            return  [...state];         
        
        case types.DELETE_TASK:
            id = action.id      // vì id là 1 tham số trong action gởi lên
            index = findIndex(state,id);
            if (index !== -1) {
                state.splice(index,1);
                localStorage.setItem('tasks',JSON.stringify(state));
            }
            return [...state];
        
        default : 
            return state;
    }
    
};

export default myReducer;