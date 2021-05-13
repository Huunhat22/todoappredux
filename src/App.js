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
        isDisplayForm: false
    }
  }

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
    this.setState({
      isDisplayForm : true
    })
  }

  //function onCloseForm
  onCloseFrom =()=>{
    this.setState({
      isDisplayForm : false
    })
  }

  //Function onSubmitForm
  onSubmitForm = (data) =>{
    var {tasks} = this.state;
    data.id = this.generateID();
    tasks.push(data);
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
    console.log(index);
    if (index !== -1) {
      tasks[index].Status = !tasks[index].Status;
      this.setState({
        tasks : tasks
      });
      localStorage.setItem('tasks',JSON.stringify(tasks));
    }
    
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

  render(){

    var {tasks,isDisplayForm} = this.state; // đây là cách viết ES6 => var tasks = this.state.tasks
    var elementTaskform = isDisplayForm ? <Taskform reviceAction = {this.onCloseFrom} reciveSubmit = {this.onSubmitForm} /> : ''; // chỗ này xử lý cho 2 thao tác, 

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
            <Tasklist tasksProps = {tasks} reciveID = {this.onUpdateStatus}></Tasklist>
          </div> 
        </div>
      </div>
    );
  }
}

export default App;
