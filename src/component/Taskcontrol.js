import React, {Component} from 'react';
import Tasksort from './Tasksort';
import Tasksreach from './Tasksreach';

class Taskcontrol extends Component{
    render(){
        return(
            <div className="row">
                <Tasksreach reciveKeyWord = {this.props.reciveKeyWord}></Tasksreach>
                <Tasksort></Tasksort>
            </div>
        )
        
        
    }
}

export default Taskcontrol;