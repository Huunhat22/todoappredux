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
    switch(action.type){

        case types.LIST_ALL :
            return state;

        case  types.ADD_TASK: 
            var newTask = {
                id : generateID(),
                Namework :  action.task.Namework,
                Status : action.task.types === 'true' ? true : false
            }; 
            state.push(newTask);
            localStorage.setItem('tasks',JSON.stringify(state));
            return [...state];

        case types.CHANGE_STATUS :
            var id = action.id      // vì id là 1 tham số trong action gởi lên
            var index = findIndex(state,id);
            if (index !== -1) {
                state[index] = {
                    ...state[index],
                    Status : !state[index].Status
                }
                localStorage.setItem('tasks',JSON.stringify(state));
            }
            // console.log(action);
            return  [...state];         

        default : 
            return state;
    }
    
};

export default myReducer;