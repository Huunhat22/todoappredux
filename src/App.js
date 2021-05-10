import { Component } from 'react';
import './App.css';
import Taskform from './component/Taskform';

class App extends Component{
  render(){
    return (
      <div className="container">
        <div className="row mt-5">
          <h1 className="text-center">To Do List Application</h1>
        </div>
        <div className= "row mt-5">
          {/* Form create new work */}
          <Taskform></Taskform>
          {/* Action Form */}
          <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
            <button className="btn btn-primary mb-3">Add New Work</button>
            <div className="row">
              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="input-group mb-3">
                  <input type="text" className="form-control" placeholder="Please input the key word" aria-describedby="button-addon2"/>
                  <button className="btn btn-primary" type="button" id="button-addon2">Sreach</button>
                </div>
              </div>
              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                  <button className="btn btn-primary">Sort Action</button>
                  <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                      <li>
                        <a href="/#" role="button">
                          <span className="fa fa-sort-alpha-asc pr-5">
                              Tên A-Z
                          </span>
                      </a>
                      </li>
                      <li>
                          <a href="/#" role="button">
                            <span className="fa fa-sort-alpha-desc pr-5">
                                Tên Z-A
                            </span>
                          </a>
                      </li>
                      <li role="separator" className="divider"></li>
                      <li><a href="/#" role="button">Trạng Thái Kích Hoạt</a></li>
                      <li><a href="/#"role="button">Trạng Thái Ẩn</a></li>
                  </ul>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <table className="table table-bordered table-hover">
                            <thead>
                                <tr>
                                    <th className="text-center">STT</th>
                                    <th className="text-center">Name</th>
                                    <th className="text-center">Active</th>
                                    <th className="text-center">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td></td>
                                    <td>
                                        <input type="text" className="form-control" />
                                    </td>
                                    <td>
                                        <select className="form-select">
                                            <option value="-1">All</option>
                                            <option value="0">Hidden</option>
                                            <option value="1">Active</option>
                                        </select>
                                    </td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>Learning program language React Js</td>
                                    <td className="text-center">
                                        <span className="label label-success">
                                            Active
                                        </span>
                                    </td>
                                    <td className="text-center">
                                        <button type="button" className="btn btn-warning">
                                            <span className="fa fa-pencil mr-5"></span>Edit
                                        </button>
                                        &nbsp;
                                        <button type="button" className="btn btn-danger">
                                            <span className="fa fa-trash mr-5"></span> Delete
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
            </div>
          </div> 
        </div>
      </div>
    );
  }
}

export default App;
