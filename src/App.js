import { Component } from 'react';
import './App.css';
import Taskform from './component/Taskform';
import Taskcontrol from './component/Taskcontrol';
import Tasklist from './component/Tasklist';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
        tasks : [], //id:bắt buộc và không trùng, name, status
        isDisplayForm: false,
        taskEditing : null,

        //Bài 26: để dưới Render gọi được 2 giá trị filter thì mình cần phải tạo state đê app.js nó nhận
        filter : {
          name : '',
          status: -1
        }
    }
  }

  // hàm này được load 1 lần
  componentDidMount(){
    if (localStorage && localStorage.getItem('tasks')) {
        var tasks = JSON.parse(localStorage.getItem('tasks'));
        this.setState({
            tasks : tasks
        })
    }
  }


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


  //tạo chuỗi random cho ID
  createRamdom=() =>{
      return Math.floor((1+Math.random()) * 0x10000).toString(16).substring(1);
  }

  //Generate ID
  generateID =()=>{
    return this.createRamdom() + this.createRamdom() + '-' + this.createRamdom() + '-' + this.createRamdom() + '-'
           + this.createRamdom() + '-' + this.createRamdom() + '-' + this.createRamdom() + this.createRamdom();
  }

  //function onToggleForm
  onToggleForm = () =>{

    //trường hợp, IF click vào sửa (chưa sửa)-> nhấn vào thêm
    if (this.state.isDisplayForm && this.state.taskEditing !== null) {
      this.setState({
        isDisplayForm : true,
        taskEditing : null
      });
    } else {    //trường hợp ngược lại -> khi nhấn vào thêm task
      this.setState({
        isDisplayForm : !this.state.isDisplayForm,
        taskEditing : null    //trường hợp này trả các giá trị trong form về null khi click thêm task
      });
    }
    
  }

  onShowForm = ()=>{
    this.setState({
      isDisplayForm : true
    });
  }

  //function onCloseForm
  onCloseFrom =()=>{
    this.setState({
      isDisplayForm : false
    })
  }

  //Function onSubmitForm => xử lý sự kiện khi thêm mới 1 công việc
  onSubmitForm = (data) =>{
    var {tasks} = this.state;
    if (data.id === '') {
      data.id = this.generateID();
      tasks.push(data);
    }
    else{
      var index = this.findIndex(data.id);
      tasks[index] = data;
    }
    
    this.setState({
      tasks : tasks
    });

    localStorage.setItem('tasks',JSON.stringify(tasks));
    // console.log(data);
  }

  //Function onUpdateStatus
  onUpdateStatus =(id) => {
    
    var {tasks} = this.state;
    var index = this.findIndex(id);
    // console.log(index);
    if (index !== -1) {
      tasks[index].Status = !tasks[index].Status;
      this.setState({
        tasks : tasks
      });
      localStorage.setItem('tasks',JSON.stringify(tasks));
    }
    
  }

  //function onDelete Item
  onDelete = (id)=>{
    var {tasks} = this.state;
    var index = this.findIndex(id);

    if (index !== -1) {
      tasks.splice(index,1);
      this.setState({
        tasks : tasks
      });

      localStorage.setItem('tasks',JSON.stringify(tasks));
    }
    this.onCloseFrom();
    // lưu vào lại localStorage
    localStorage.setItem('tasks',JSON.stringify(tasks));
  }

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

    this.onShowForm();
    // console.log(id);

  }

  //tìm ra index của item muốn thay đổi
  findIndex =(id)=>{
    var {tasks} = this.state;
    var result = -1;
    tasks.forEach((task,index) =>{
      if (task.id === id) {
          result = index;
      }
    });
    return result;
  }

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

  render(){

    var {tasks,isDisplayForm,taskEditing,filter} = this.state; // đây là cách viết ES6 => var tasks = this.state.tasks, các bài trước và Bài 26
    console.log(filter);
    //Bài 26, xử lý Filter
    // if (filter) {
    //   if (filter.name) {
    //      tasks =  tasks.filter(task => {
    //        return task.name.toLowerCase().indexOf(filter.name) !== -1;
    //       });
    //   }
    //   tasks = tasks.filter(task =>{
    //     if (filter.status === -1) {
    //       return task;
    //     }else{
    //       return task.status === (filter.status === 1 ? true : false);
    //     }
    //   })
    // }
    
    //xử lý : nếu có isDisplayForm == true thì sẽ hiển thị component Taskform , ngược lại thì không
    var elementTaskform = isDisplayForm ? <Taskform reviceAction = {this.onCloseFrom} // xử lý sự kiện onCloseForm
                                                    reciveSubmit = {this.onSubmitForm} // xử lý sự kiện onSubmitForm
                                                    task = {taskEditing} /> : ''; 

    return (
      <div className="container">
        <div className="row mt-5">
          <h1 className="text-center">To Do List Application</h1>
        </div>
        <div className= "row mt-5">
          {/* Form create new work */}
          <div className={isDisplayForm ? '"col-xs-4 col-sm-4 col-md-4 col-lg-4"' : ''}>
            {elementTaskform}
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
            <Taskcontrol></Taskcontrol>
            <Tasklist tasksProps = {tasks}
                      reciveID = {this.onUpdateStatus}
                      reciveDeleteID = {this.onDelete}
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

export default App;
