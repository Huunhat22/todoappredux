import React, {Component} from 'react';

class Taskform extends Component{

    //create constructor
    constructor(props){
        super(props);
        this.state = {
            id :'',
            Namework : '',
            Status : false
        }
    }

    //tạo 1 component lycrical
    componentDidMount(){
        if (this.props.task) {
            this.setState({
                id : this.props.task.id,
                Namework : this.props.task.Namework,
                Status : this.props.task.Status
            })
        }
    }

    //hàm này thực hiện liên tục mỗi khi có props thay đổi, state là giá trị đang có , props là giá trị đang bị thay đổi
    static getDerivedStateFromProps(props, state){
        if (props.task) { // trường hợp này taskEditing có dữ liệu (có nghĩa là đang click vào sửa )
            if(props.task.id !== state.id){
                return {
                    
                    id : props.task.id,
                    Namework : props.task.Namework,
                    Status : props.task.Status
                }
               
            }
        }
        else{    // trường hợp này taskEditing == Null (có nghĩa là đang click vào sửa sau đó click vào thêm )
            if (state.id) { // id này là id của item vừa mới click vào sửa
                return {
                    id : '',
                    Namework : '',
                    Status : false
                }
                
            }
            // console.log(state.id);
        }
        // Return null to indicate no change to state.
        return null;
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


    //function onSubmit mục đích để truyền 1 props từ component con sang component cha.
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
        var {id} = this.state;
        return(
            /* Col to insert todo */
            <div className="card">
                <div className="d-flex justify-content-between card-header">
                    <h5 className="text-center">{id === '' ? 'Add New Work': 'Update This Work'}</h5>
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