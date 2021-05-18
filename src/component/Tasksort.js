import React ,{Component} from 'react';
import './tasksort.css';

class Tasksort extends Component{

    //khởi tạo hàm onClick
    onClick = (sortBy, sortValue) =>{
        
        this.props.onSort(sortBy, sortValue);
        // console.log(sortBy + '  _  '+ sortValue);
    } 

    render(){

        // var {sort} = this.state;

        return(
            
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    {/* <!-- Default dropend button --> */}
                    <div className="btn-group dropend">
                        <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                            Sort Action
                        </button>
                        <ul className="dropdown-menu">
                            <li onClick = {() =>{this.onClick('name', 1)}}>
                                <a href="/#" className="dropdown-item">
                                    <i className="fas fa-sort-alpha-up"></i> Name A-Z &nbsp;<i className={( this.props.sortBy=== 'name' && this.props.sortValue === 1) ? 'fas fa-check' : ''}></i>
                                </a>
                            </li>
                            <li onClick = {() =>{this.onClick('name', -1)}}>
                                <a href="/#" className="dropdown-item">
                                    <i className="fas fa-sort-alpha-down"></i> Name Z-A &nbsp;<i className={(this.props.sortBy === 'name' && this.props.sortValue === -1) ? 'fas fa-check' : ''}></i>
                                </a>
                            </li>
                            <li onClick = {() =>{this.onClick('status', 1)}}>
                                <a href="/#" className="dropdown-item" role="button">Status Active &nbsp;
                                    <i className={(this.props.sortBy === 'status' && this.props.sortValue === 1) ? 'fas fa-check' : ''}></i>
                                </a>
                            </li>
                            <li onClick = {() =>{this.onClick('status', -1)}}>
                                    <a href="/#" className="dropdown-item" role="button">Status Deactivate &nbsp;
                                        <i className={(this.props.sortBy === 'status' && this.props.sortValue === -1) ? 'fas fa-check' : ''}></i>
                                    </a>
                            </li>
                        </ul>
                    </div>
            </div>
        )
    }
}

export default Tasksort;