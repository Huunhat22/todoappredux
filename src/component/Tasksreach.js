import React ,{Component} from 'react';

class Tasksreach extends Component{
    render(){
        return(
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Please input the key word" aria-describedby="button-addon2"/>
                        <button className="btn btn-primary" type="button" id="button-addon2">Sreach</button>
                    </div>
            </div>
        )
    }
}

export default Tasksreach;