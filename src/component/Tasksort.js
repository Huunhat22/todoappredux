import React ,{Component} from 'react';

class Tasksort extends Component{
    render(){
        return(
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    {/* <!-- Default dropend button --> */}
                    <div className="btn-group dropend">
                        <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                            Sort Action
                        </button>
                        <ul className="dropdown-menu">
                            <li><a href="/#" className="dropdown-item"><i className="fas fa-sort-alpha-up"></i> Name A-Z</a></li>
                            <li><a href="/#" className="dropdown-item"><i className="fas fa-sort-alpha-down"></i> Name Z-A</a></li>
                            <li href="/#" className="divider"></li>
                            <li><a href="/#" className="dropdown-item" role="button">Status Active</a></li>
                            <li><a href="/#" className="dropdown-item" role="button">Status Deactivate</a></li>
                        </ul>
                    </div>
            </div>
        )
    }
}

export default Tasksort;