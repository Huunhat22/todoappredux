import React, {Component} from 'react';

class Taskform extends Component{

    //create constructor
    constructor(props){
        super(props);
        this.state = {
            Namework : '',
            Status : false
        }
    }

    //function onCloseForm
    onCloseForm=()=>{
        this.props.reviceAction();
    }

    //Function onChangeAction
    onChangeAction =(event)=>{
        var target = event.target;
        var name = target.name;
        var value = target.value;
        if (name === 'Status') {
            value = target.value === 'true' ? true : false;
        }

        this.setState({
            [name] : value
        })
    }

    onSubmit = (event) =>{
        event.preventDefault();
        this.props.reciveSubmit(this.state);

        //sau khi submit thi se goi toi 2 function nay
        this.onClear();
        this.onCloseForm();
        // console.log(this.state);
    }

    onClear=() =>{
        this.setState({
            Namework : '',
            Status : false
        })
    }

    render(){
        return(
            /* Col to insert todo */
            <div className="card">
                <div className="d-flex justify-content-between card-header">
                    <h5 className="text-center">Add New Work</h5>
                    <span onClick={this.onCloseForm}><i className="fas fa-times-circle"></i></span>
                </div>
                <div className="card-body">
                    <form onSubmit = {this.onSubmit}>
                        <div className="mb-3">
                            <label className="form-label">Title</label>
                            <input className="form-control" type="text" name="Namework" value={this.state.Namework} onChange = {this.onChangeAction}></input>
                        </div>
                        <div className="mb-3">
                            <select className="form-select" name="Status" value={this.state.Status} onChange = {this.onChangeAction}>
                                <option>Please Choose The Status</option>
                                <option value={true}>Active</option>
                                <option value={false}>Deactivate</option>
                            </select>
                        </div>
                        <div className="d-flex justify-content-evenly mb-3">
                            <button className="btn btn-outline-success" type="submit">Save</button>
                            <button className="btn btn-outline-danger" type="button" onClick={this.onClear}>Delete</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Taskform;