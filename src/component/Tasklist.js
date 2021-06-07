import React ,{Component} from 'react';
import Taskitem from './Taskitem';
import { connect } from 'react-redux';
import * as action from './../actions/index';

class Tasklist extends Component{


    //tạo 1 state dùng để nhận giá trị khi filter , Bài 26
    constructor(props){
        super(props);
        this.state = {
            filterName : '',
            filterStatus : -1   // -1 là tất cả, 1 kích hoạt, 0 là ẩn
        }
    }


    //function onChange để  , Bài 26
    onChange = (event)=>{
        var target = event.target;
        var name = target.name;
        var value = target.value;
        //truyền dữ liệu ra bên ngoài component cha
        // this.props.reciveFilter(         // code cũ sử dụng ReactJS thuần
        //     name === 'filterName' ? value :this.state.filterName,
        //     name === 'filterStatus' ? value : this.state.filterStatus
        // )

         this.props.onFilterTable( 
             {
                name: name === 'filterName' ? value :this.state.filterName,
                status: name === 'filterStatus' ? value : this.state.filterStatus
            }
         );
        this.setState({
            [name] : value
        });
       
    }

    render(){
        
        var {tasks,filterTable,keyword,sort} = this.props; // var tasks = this.props.tasks
        
        // tạo các props từ state trong constructor, Bài 26
         var {filterName,filterStatus} = this.state; 

        //    Bài 44, xử lý Filter
        if (filterTable) {
          if (filterTable.name) {
             tasks =  tasks.filter(task => {
               return task.Namework.toLowerCase().indexOf(filterTable.name) !== -1;
              });
          }
          tasks = tasks.filter(task =>{
            if (filterTable.status === -1) {
              return task;
            }else{
              return task.Status === (filterTable.status === 1 ? true : false);
            }
          })
        }

        //Bai 45, xu ly chuc nang Sreach
        if (keyword) {
        tasks =  tasks.filter(task => {
            return task.Namework.toLowerCase().indexOf(keyword) !== -1;
            });
        }
        
        //Bai 28 , xy chuc nang sort
        if (sort.sortBy === 'name') {
            tasks =  tasks.sort((a,b) =>{
            if (a.Namework > b.Namework) return sort.sortValue;
            else if (a.Namework < b.Namework) return -sort.sortValue;
            else return 0;
            });
        }else{
            tasks =  tasks.sort((a,b) =>{
                if (a.Status > b.Status) return -sort.sortValue;
                else if (a.Status < b.Status) return sort.sortValue;
                else return 0;
            });
        }
        
        var Elements = tasks.map((task, index) => {
            return <Taskitem key = {task.id}
                             index = {index}
                             task = {task} 
                             //onUpdateStatus = {this.props.reciveID}
                             //onDeleteItem = {this.props.reciveDeleteID}
                             //onUpdateItem = {this.props.reciveUpdatetID}

                    />
        });


        return(
            <div className = "row">  
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <table className="table table-bordered table-hover">
                        <thead>
                            <tr>
                                <th className="text-center">STT</th>
                                <th className="text-center">Name</th>
                                <th className="text-center">Active</th>
                                <th className="text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td></td>
                                <td>
                                    {/* Bài 26 */}
                                    <input type="text" className="form-control" name="filterName" value ={filterName} onChange = {this.onChange}/>
                                </td>
                                <td>
                                    {/* Bài 26 */}
                                    <select className="form-select" name ="filterStatus" value ={filterStatus} onChange = {this.onChange}>  
                                        <option value={-1}>All</option>
                                        <option value={0}>Hidden</option>
                                        <option value={1}>Active</option>
                                    </select>
                                </td>
                                <td></td>
                            </tr>
                           {Elements}
                        </tbody>
                    </table>
                </div>
          </div>
        )
    }
}

//tạo 1 const để : chuyển các state của store thành các props của component
const mapStateToProps = (state) =>{
    return {
        tasks : state.tasks,
        filterTable : state.filterTable,
        keyword : state.searchTask,
        sort : state.sortTask
    }
};

const mapDispatchToProps = (dispatch,props) =>{
    return{
        onFilterTable : (filter) =>{    // filter trên Store là 1 object nên tham số ở đây cũng là object
            dispatch(action.filterTable(filter));
        },
    }
};


export default connect(mapStateToProps,mapDispatchToProps)(Tasklist);