import { Component } from 'react';
import './App.css';
import Taskform from './component/Taskform';
import Taskcontrol from './component/Taskcontrol';
import Tasklist from './component/Tasklist';
import {connect} from 'react-redux';
import * as action from './actions/index';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      //  tasks : [], //id:bắt buộc và không trùng, name, status    , qua redux thì mình không sử dụng nữa
        // isDisplayForm: false,                                    , qua redux thì mình không sử dụng nữa
        taskEditing : null,

        //Bài 26: để dưới Render gọi được 2 giá trị filter thì mình cần phải tạo state đê app.js nó nhận
        filter : {
          name : '',
          status: -1
        },
        keyword : '',
        sortBy : 'name',
        sortValue : 1
    }
  }

  // hàm này được load 1 lần,     qua redux thì mình không sử dụng nữa
  // componentDidMount(){
  //   if (localStorage && localStorage.getItem('tasks')) {
  //       var tasks = JSON.parse(localStorage.getItem('tasks'));
  //       this.setState({
  //           tasks : tasks
  //       })
  //   }
  // }


  //tạo function onGenerateData
  // onGenerateData = ()=>{
  //   var tasks = [
  //     {
  //       id : this.generateID(),
  //       Namework : "Học lập trình",
  //       Status : true

  //     },
  //     {
  //       id : this.generateID(),
  //       Namework : "Đi nhà sách",
  //       status : false

  //     },
  //     {
  //       id : this.generateID(),
  //       Namework : "Chạy bộ công viên",
  //       Status : false

  //     },
  //   ];

  //   //set state
  //   this.setState({
  //     tasks : tasks
  //   });
    
  //   localStorage.setItem('tasks',JSON.stringify(tasks));

  // }


  //tạo chuỗi random cho ID  , không sử dụng nữa do dùng Redux
  // createRamdom=() =>{
  //     return Math.floor((1+Math.random()) * 0x10000).toString(16).substring(1);
  // }

  //Generate ID,   không sử dụng nữa do dùng Redux
  // generateID =()=>{
  //   return this.createRamdom() + this.createRamdom() + '-' + this.createRamdom() + '-' + this.createRamdom() + '-'
  //          + this.createRamdom() + '-' + this.createRamdom() + '-' + this.createRamdom() + this.createRamdom();
  // }

  //function onToggleForm
   onToggleForm = () =>{

  //   //trường hợp, IF click vào sửa (chưa sửa)-> nhấn vào thêm
  //   if (this.state.isDisplayForm && this.state.taskEditing !== null) {
  //     this.setState({
  //       isDisplayForm : true,
  //       taskEditing : null
  //     });
  //   } else {    //trường hợp ngược lại -> khi nhấn vào thêm task
  //     this.setState({
  //       isDisplayForm : !this.state.isDisplayForm,
  //       taskEditing : null    //trường hợp này trả các giá trị trong form về null khi click thêm task
  //     });
  //   }
    this.props.onToggleForm();
   }

  onShowForm = ()=>{
    this.setState({
      isDisplayForm : true
    });
  }

  //function onCloseForm
  // onCloseFrom =()=>{
  //   this.setState({
  //     isDisplayForm : false
  //   })
  // }

  //Function onSubmitForm => xử lý sự kiện khi thêm mới 1 công việc   , không dùng nữa khi sử dụng redux
  // onSubmitForm = (data) =>{
  //   var {tasks} = this.state;
  //   if (data.id === '') {
  //     data.id = this.generateID();
  //     tasks.push(data);
  //   }
  //   else{
  //     var index = this.findIndex(data.id);
  //     tasks[index] = data;
  //   }
    
  //   this.setState({
  //     tasks : tasks
  //   });

  //   localStorage.setItem('tasks',JSON.stringify(tasks));
  //   // console.log(data);
  // }

  //Function onUpdateStatus
  // onUpdateStatus =(id) => {
    
  //   var {tasks} = this.state;
  //   var index = this.findIndex(id);
  //   // console.log(index);
  //   if (index !== -1) {
  //     tasks[index].Status = !tasks[index].Status;
  //     this.setState({
  //       tasks : tasks
  //     });
  //     localStorage.setItem('tasks',JSON.stringify(tasks));
  //   }
    
  // }

  //function onDelete Item
  // onDelete = (id)=>{
  //   var {tasks} = this.state;
  //   var index = this.findIndex(id);

  //   if (index !== -1) {
  //     tasks.splice(index,1);
  //     this.setState({
  //       tasks : tasks
  //     });

  //     localStorage.setItem('tasks',JSON.stringify(tasks));
  //   }
    // this.onCloseFrom();
    // lưu vào lại localStorage
    // localStorage.setItem('tasks',JSON.stringify(tasks));
  // }

  //function onEdit
  onUpdate = (id)=>{
    //tìm và lấy ra được item cần chỉnh sửa
    var {tasks} = this.state;
    var index = this.findIndex(id);

    //gán item tìm được vào state Editing
    var taskEditing = tasks[index];
    this.setState({
      taskEditing : taskEditing
    })

    //this.onShowForm();
    // console.log(id);

  }

  //tìm ra index của item muốn thay đổi
  // findIndex =(id)=>{
  //   var {tasks} = this.state;
  //   var result = -1;
  //   tasks.forEach((task,index) =>{
  //     if (task.id === id) {
  //         result = index;
  //     }
  //   });
  //   return result;
  // }

  //tạo Function onFilter , Bài 26
  onFilter = (filterName, filterStatus)=>{
    // ép kiểu sang kiểu Int, có 2 cách : thêm dấu + trước biến cần ép, hoặc dùng parseInt(filterStatus,10)
    filterStatus = parseInt(filterStatus,10);

    this.setState({
      filter :{
        name : filterName.toLowerCase(),
        status : filterStatus
      }
    });
  }

  //function onSreach . Ham tim kiem tu input , Bai 27
  onSreach = (keyword)=>{
   this.setState({
     keyword : keyword
   })
  }

  // function onSort , ham sap xep , Bai 28
  onSort = (sortBy, sortValue) =>{
    this.setState({
      sortBy : sortBy,
      sortValue : sortValue
    })
    // console.log(this.state);
  }

  render(){
    
    //Sau khi mapStateToProps, thì tạo 1 biến isDisplayForm sẽ không lấy state từ App, mà phải lấy từ Store
    var {isDisplayForm} = this.props;

    var {//tasks, không sử dụng nữa
          // isDisplayForm, không sử dụng khi sang redux
          taskEditing,
         // filter,keyword,
          sortBy,sortValue
        } = this.state; // đây là cách viết ES6 => var tasks = this.state.tasks, các bài trước và Bài 26

    //Bài 26, xử lý Filter
    // if (filter) {
    //   if (filter.name) {
    //      tasks =  tasks.filter(task => {
    //        return task.Namework.toLowerCase().indexOf(filter.name) !== -1;
    //       });
    //   }
    //   tasks = tasks.filter(task =>{
    //     if (filter.status === -1) {
    //       return task;
    //     }else{
    //       return task.Status === (filter.status === 1 ? true : false);
    //     }
    //   })
    // }
    

    //Bai 27, xu ly chuc nang Sreach
  //   if (keyword) {
  //     tasks =  tasks.filter(task => {
  //       return task.Namework.toLowerCase().indexOf(keyword) !== -1;
  //      });
  //  }

   //Bai 28 , xy chuc nang sort
  //  if (sortBy === 'name') {
  //    tasks =  tasks.sort((a,b) =>{
  //      if (a.Namework > b.Namework) return sortValue;
  //      else if (a.Namework < b.Namework) return -sortValue;
  //      else return 0;
  //    });
  //  }else{
  //     tasks =  tasks.sort((a,b) =>{
  //       if (a.Status > b.Status) return -sortValue;
  //       else if (a.Status < b.Status) return sortValue;
  //       else return 0;
  //     });
  //  }

    //xử lý : nếu có isDisplayForm == true thì sẽ hiển thị component Taskform , ngược lại thì không
   // var elementTaskform = isDisplayForm ? <Taskform // reviceAction = {this.onCloseFrom} // xử lý sự kiện onCloseForm
                                                    // reciveSubmit = {this.onSubmitForm} // xử lý sự kiện onSubmitForm
                                                   // task = {taskEditing} /> : ''; 

    return (
      <div className="container">
        <div className="row mt-5">
          <h1 className="text-center">To Do List Application Build by React Redux</h1>
        </div>
        <div className= "row mt-5">
          {/* Form create new work */}
          <div className={isDisplayForm ? '"col-xs-4 col-sm-4 col-md-4 col-lg-4"' : ''}>
            {/* {elementTaskform} */}
            <Taskform task = {taskEditing}/>
          </div>
          
          {/* Action Form */}
          <div className={isDisplayForm ? '"col-xs-8 col-sm-8 col-md-8 col-lg-8"' : '"col-xs-12 col-sm-12 col-md-12 col-lg-12"'}>
            <button className="btn btn-primary mb-3 mr-3" onClick = {this.onToggleForm}>
              <i className="fas fa-plus"></i> 
              Add New Work
            </button> &nbsp;
            {/* <button className="btn btn-danger mb-3" onClick={this.onGenerateData}>
              Generate Data
            </button> */}
            <Taskcontrol reciveKeyWord = {this.onSreach} onSort = {this.onSort} sortBy = {sortBy} sortValue = {sortValue}></Taskcontrol>
            <Tasklist //tasksProps = {tasks}
                      //reciveID = {this.onUpdateStatus}
                      //reciveDeleteID = {this.onDelete}
                      reciveUpdatetID = {this.onUpdate}
                      
                      //tạo cho Tasklist 1 props , Bài 26
                      reciveFilter = {this.onFilter}
            >
            </Tasklist>
          </div> 
        </div>
      </div>
    );
  }
}

const mapStateToProps  = (state)=>{ // chuyển state trên store thành props trên App component
  return {
    isDisplayForm : state.isDisplayForm
  }
};

const mapDispatchToProps = (dispatch,props)=>{  
  return{
    onToggleForm : () => {
        dispatch(action.toggleForm());
    }
  }
};


export default connect(mapStateToProps,mapDispatchToProps)(App);
