import { Component } from 'react';
import './App.css';
import Taskform from './component/Taskform';
import Taskcontrol from './component/Taskcontrol';
import Tasklist from './component/Tasklist';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
        tasks : [] //id:bắt buộc và không trùng, name, status
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
  onGenerateData = ()=>{
    var tasks = [
      {
        id : this.generateID(),
        name : "Học lập trình",
        status : true

      },
      {
        id : this.generateID(),
        name : "Đi nhà sách",
        status : false

      },
      {
        id : this.generateID(),
        name : "Chạy bộ công viên",
        status : false

      },
    ];

    //set state
    this.setState({
      tasks : tasks
    });
    
    localStorage.setItem('tasks',JSON.stringify(tasks));

  }


  //tạo chuỗi random cho ID
  createRamdom=() =>{
      return Math.floor((1+Math.random()) * 0x10000).toString(16).substring(1);
  }

  //Generate ID
  generateID =()=>{
    return this.createRamdom() + this.createRamdom() + '-' + this.createRamdom() + '-' + this.createRamdom() + '-'
           + this.createRamdom() + '-' + this.createRamdom() + '-' + this.createRamdom() + this.createRamdom();
  }

  render(){

    var {tasks} = this.state; // đây là cách viết ES6 => var tasks = this.state.tasks

    return (
      <div className="container">
        <div className="row mt-5">
          <h1 className="text-center">To Do List Application</h1>
        </div>
        <div className= "row mt-5">
          {/* Form create new work */}
          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <Taskform></Taskform>
          </div>
          
          {/* Action Form */}
          <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
            <button className="btn btn-primary mb-3 mr-3">
              <i className="fas fa-plus"></i> 
              Add New Work
            </button> &nbsp;
            <button className="btn btn-danger mb-3" onClick={this.onGenerateData}>
              Generate Data
            </button>
            <Taskcontrol></Taskcontrol>
            <Tasklist tasksProps = {tasks}></Tasklist>
          </div> 
        </div>
      </div>
    );
  }
}

export default App;
