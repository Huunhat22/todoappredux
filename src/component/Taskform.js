import React, {Component} from 'react';

class Taskform extends Component{
    render(){
        return(
            /* Col to insert todo */
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                <div className="card">
                    <div className="card-header">
                        <h4 className="text-center">Add New Work</h4>
                    </div>
                    <div className="card-body">
                        <div className="mb-3">
                            <label className="form-label">Title</label>
                            <input className="form-control" type="text"></input>
                        </div>
                        <div className="mb-3">
                            <select className="form-select">
                                <option value={0}>Please Choose The Status</option>
                                <option value={1}>Active</option>
                                <option value={2}>Deactivate</option>
                            </select>
                        </div>
                        <div className="d-flex justify-content-evenly mb-3">
                            <button className="btn btn-outline-success">Save</button>
                            <button className="btn btn-outline-danger">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Taskform;