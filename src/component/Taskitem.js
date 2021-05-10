import React ,{Component} from 'react';

class Taskitem extends Component{
    render(){
        return(
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
                        <span className="fas fa-pencil-alt mr-5"></span> Edit
                    </button>
                    &nbsp;
                    <button type="button" className="btn btn-danger">
                        <span className="fa fa-trash mr-5"></span> Delete
                    </button>
                </td>
            </tr>
        )
    }
}

export default Taskitem;