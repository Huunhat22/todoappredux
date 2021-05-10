import React, {Component} from 'react';

class Taskform extends Component{
    render(){
        return(
            /* Col to insert todo */
            <div className="card">
                <div className="d-flex justify-content-between card-header">
                    <h5 className="text-center">Add New Work</h5>
                    <a href="/#"><i className="fas fa-times-circle"></i></a>
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
        )
    }
}

export default Taskform;