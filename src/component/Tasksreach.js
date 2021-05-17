import React ,{Component} from 'react';

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
        this.props.reciveKeyWord(this.state.keyword);
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

export default Tasksreach;