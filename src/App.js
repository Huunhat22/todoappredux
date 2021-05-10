import { Component } from 'react';
import './App.css';
import Taskform from './component/Taskform';
import Taskcontrol from './component/Taskcontrol';
import Tasklist from './component/Tasklist';

class App extends Component{
  render(){
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
            <button className="btn btn-primary mb-3">
              <i className="fas fa-plus"></i> 
              Add New Work
            </button>
            <Taskcontrol></Taskcontrol>
            <Tasklist></Tasklist>
          </div> 
        </div>
      </div>
    );
  }
}

export default App;
