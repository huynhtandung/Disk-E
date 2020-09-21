import React, { Component } from 'react';
import TabItem from './TabItem';
import { connect } from 'react-redux';
import * as actions from '../actions/index';

class TabList extends Component {

    constructor(props){
        super(props);
        this.state = {
            filterName: '',
            filterStatus: -1
        }
    }

    onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        
        //console.log(value);
        var filter = {
            name : name === 'filterName' ? value : this.state.filterName,
            status : name === 'filterStatus' ? value : this.state.filterStatus
        };
        this.props.onFilter(filter);
        this.setState({
            [name] : value
        });
        
    }

  	render() {
        var {tasks} = this.props;  

        if(this.props.filter !== null){
            //console.log(this.props.filter);
            if(this.props.filter.name){
                tasks = tasks.filter((task)=>{
                    return (task.name.toLowerCase().indexOf(this.props.filter.name.toLowerCase()) !==-1);
                });
            }
            tasks = tasks.filter((task)=>{
                if(this.props.filter.status === -1)
                    return task;
                else{
                    return task.status === (this.props.filter.status === 1 ? true : false)
                }
            });
        } 

        if(this.props.search !== null){
            tasks = tasks.filter((task)=>{
                return (task.name.toLowerCase().indexOf(this.props.search.toLowerCase()) !==-1);
            });
        }


        var elmTasks = tasks.map((task , index)=>{
            return <TabItem 
                        key={task.id} 
                        index={index} 
                        task={task}
                        editID = {this.props.onEdit}
                    >
                    </TabItem>
        });
        return(
            <table className="table table-bordered table-hover text-center">
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Tên</th>
                        <th>Trạng thái</th>
                        <th>Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td>
                            <input 
                                type="text" 
                                className="form-control"
                                name="filterName"
                                value={this.state.filterName}
                                onChange={this.onChange}
                            />
                        </td>
                        <td>
                            <select className="form-control"
                                name="filterStatus"
                                value={this.state.filterStatus}
                                onChange={this.onChange}
                            >
                                <option value={-1}>Tất cả</option>
                                <option value={0}>Ẩn</option>
                                <option value={1}>Kích hoạt</option>
                            </select>
                        </td>
                        <td></td>
                    </tr>
                    { elmTasks }
                </tbody>
            </table> 
        );
 	}
}
const mapStateToProps = (state) =>{
    return{
        tasks: state.tasks,
        filter : state.filterTable,
        search: state.search
    }
}
const mapDispatchToProps = (dispatch, props) =>{
    return{
        onFilter : (filter) =>{
            dispatch(actions.filterTable(filter))
        },

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TabList);
