import React ,{Component} from 'react';
import { connect } from 'react-redux';
import * as action from './../actions/index';


class Tasksreach extends Component{

    constructor(props){
        super(props);
        this.state = {
            //tạo keyword để nhận từ input
            keyword : ''
        }
    }

    //function onChange
    onChange = (event)=>{
        var target = event.target;
        var name = target.name;
        var value = target.value;

        this.setState({
            [name] : value
        });
    }

    //function onSreach
    onSreach = ()=>{
        // this.props.reciveKeyWord(this.state.keyword);        không sử dụng khi chuyển sang redux
        // console.log(this.state.keyword);

        this.props.onSearchTask(this.state.keyword);
        // console.log(this.state.keyword);

    }



    render(){
        var {keyword} = this.state;
        return(
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Please input the key word" aria-describedby="button-addon2" name ="keyword" value = {keyword} onChange = {this.onChange}/>
                        <button className="btn btn-primary" type="button" id="button-addon2" onClick = {this.onSreach}>Sreach</button>
                    </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return{

    }
};

const mapDispatchToProps = (dispatch,props )=> {
    return{
        onSearchTask : (keyword)=>{
            dispatch(action.searchTask(keyword));
        }
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Tasksreach);