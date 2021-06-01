import React ,{Component} from 'react';
import {connect} from 'react-redux';
import * as action from './../actions/index';

class Taskitem extends Component{

    //function onUpdateStatus
    onUpdateStatus = ()=>{
        // this.props.onUpdateStatus(this.props.task.id);   // không sử dụng khi chuyển sang redux
        this.props.onChangeStatus(this.props.task.id);
        // console.log(this.props.task.id);
    }

    //function onDeleteItem

    onDeleteItem =() =>{
        // this.props.onDeleteItem(this.props.task.id);     // không sử dụng nữa khi chuyển sang redux
        this.props.onDeleteTask(this.props.task.id);
        this.props.closeForm();
    }
    
    //function onUpdateItem
    onUpdateItem =()=>{
        // this.props.onUpdateItem(this.props.task.id);
        this.props.onOpenForm();
        this.props.onEditTask(this.props.task);
    }


    render(){

        var {task,index} = this.props;
        return(
            <tr>
                <td>{index + 1}</td>
                <td>{task.Namework}</td>
                <td className="text-center">
                    <span className={ task.Status === true ? 'badge bg-success' : 'badge bg-danger'} onClick = {this.onUpdateStatus}>
                       {task.Status === true ? 'Kích Hoạt' : 'Ẩn'}
                    </span>
                </td>
                <td className="text-center">
                    <button type="button" className="btn btn-warning" onClick = {this.onUpdateItem}>
                        <span className="fas fa-pencil-alt mr-5"></span> Edit
                    </button>
                    &nbsp;
                    <button type="button" className="btn btn-danger" onClick={this.onDeleteItem}>
                        <span className="fa fa-trash mr-5"></span> Delete
                    </button>
                </td>
            </tr>
        )
    }
}

const mapStateToProps = (state) =>{
    return {

    }
};

const mapDispatchToProps = (dispatch,props) =>{
    return{
        onChangeStatus : (id) =>{
            dispatch(action.changeStatus(id));
        },
        onDeleteTask : (id) =>{
            dispatch(action.deleteTask(id));
        },
        closeForm :() =>{
            dispatch(action.closeForm());
        },
        onOpenForm :() =>{
            dispatch(action.openForm());
        },
        onEditTask :(task)=>{
            dispatch(action.updateTask(task));
        }

    }
};

export default connect(mapStateToProps,mapDispatchToProps)(Taskitem);

