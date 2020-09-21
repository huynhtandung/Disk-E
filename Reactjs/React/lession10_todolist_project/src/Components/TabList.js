import React, { Component } from 'react';
import TabItem from './TabItem';

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

        this.props.onFilter(
            name === 'filterName' ? value : this.state.filterName,
            name === 'filterStatus' ? value : this.state.filterStatus
        );
        
        this.setState({
            [name]: value
        });
        
    }

  	render() {
        var {tasks} = this.props;
        
        var elmTasks = tasks.map((task , index)=>{
            return <TabItem 
                        key={task.id} 
                        index={index} 
                        task={task}
                        updateStatus={this.props.onUpdateStatus}
                        deleteID = {this.props.onDelete}
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

export default TabList;
